const inquirer = require('inquirer');
const validate = require('./validate');

module.exports = {
  prompter: prompter,
  formatCommit: formatCommit,
};

// simple setup I used in my last project
const questions = [
  {
    type: 'input',
    name: 'type',
    message: 'type (feat, fix, docs, refactor, chore) (required): ',
    validate: validate.exists,
  },
  {
    type: 'input',
    name: 'scope',
    message: 'scope (e.g. component or file name) (required): ',
    validate: validate.exists,
  },
  {
    type: 'input',
    name: 'jiraIssueKey',
    message: 'Jira issue key (e.g. OP-40) (required): ',
    validate: validate.exists,
  },
  {
    type: 'input',
    name: 'message',
    message: 'Commit message (required):\n',
    validate: validate.exists,
  },
  {
    type: 'input',
    name: 'time',
    message: 'Time taken on commit (optional):\n',
  },
  {
    type: 'input',
    name: 'coAuthorship', //only works for one co-author
    message:
      'co-author (Ai for Aishah, Az for Azizi, L for Lisa, J for Jihyun) (optional): ',
  },
];

function formatCommit(commit, answers) {
  const {
    type,
    scope,
    jiraIssueKey,
    message,
    time,
    closes,
    coAuthorship,
  } = answers;
  commit(
    [
      type && type + '',
      scope && '(' + scope + ')',
      ': ',
      jiraIssueKey && jiraIssueKey.toUpperCase() + ' ',
      message && '#comment ' + message,
      time && ' #time ' + time,
      coAuthorship && '\n\n' + parseCoAuthor(coAuthorship),
    ]
      .filter((answer) => !!answer)
      .join('')
  );
}

function parseCoAuthor(coAuthorship) {
  const beginning = '\nCo-authored-by: ';
  let ending;
  if (coAuthorship.toUpperCase() === 'AI') {
    ending = ' aissshah <aissshah@outlook.com>';
  } else if (coAuthorship.toUpperCase() === 'AZ') {
    ending = 'Azizi-A <azizi.adeyemo@gmail.com>';
  } else if (coAuthorship.toUpperCase() === 'L') {
    ending = 'LiCern <lisacernilogar@me.com>';
  } else if (coAuthorship.toUpperCase() === 'J') {
    ending = 'Jihyun-Jang <jhjang742@gmail.com>';
  } else {
    ending = coAuthorship;
  }
  return beginning + ending;
}

function prompter(cz, commit) {
  inquirer.prompt(questions).then((answers) => {
    formatCommit(commit, answers);
  });
}
