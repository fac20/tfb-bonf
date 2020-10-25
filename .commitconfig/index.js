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
    message: 'type (feat, fix, docs, refactor, chore) (optional)',
  },
  {
    type: 'input',
    name: 'scope',
    message: 'scope (e.g. component or file name) (optional)',
  },
  {
    type: 'input',
    name: 'jiraIssueNo',
    message: 'Jira issue number (e.g. OP-40) (required)',
    validate: validate.exists,
  },
  {
    type: 'input',
    name: 'message',
    message: 'GitHub commit message (required):\n',
    validate: validate.exists,
  },
  {
    type: 'input',
    name: 'time',
    message: 'Time taken on commit (optional):\n',
  },
  {
    type: 'input',
    name: 'closes',
    message: 'Closes issue number (optional):\n',
  },
  {
    type: 'input',
    name: 'coauthorship',
    message:
      'coauthor (Ai for Aishah, Az for Azizi, L for Lisa, J for Jihyun) (optional):\n',
  },
];

function formatCommit(commit, answers) {
  const {
    type,
    scope,
    jiraIssueNo,
    message,
    time,
    closes,
    coauthorship,
  } = answers;
  commit(
    [
      type && type + '',
      scope && '(' + scope + ')',
      ': ',
      message && message + ' ',
      jiraIssueNo && jiraIssueNo.toUpperCase(),
      message && '\n\n Comments: #comment ' + message,
      time && ' #time ' + time,
      closes && ' #fixes' + closes,
      coauthorship && parseCoauthor(coauthorship),
    ]
      .filter((answer) => !!answer)
      .join('')
  );
}

function parseList(strList) {
  return strList.split(/[ ,]+/).join(' #');
}

function parseCoauthor(coauthorship) {
  const beginning = '\nCo-authored-by: ';
  let ending;
  if (coauthorship.toUpperCase() === 'AI') {
    ending = ' aissshah <aissshah@outlook.com>';
  } else if (coauthorship.toUpperCase() === 'AZ') {
    ending = 'Azizi-A <azizi.adeyemo@gmail.com>';
  } else if (coauthorship.toUpperCase() === 'L') {
    ending = 'LiCern <lisacernilogar@me.com>';
  } else if (coauthorship.toUpperCase() === 'J') {
    ending = 'Jihyun-Jang <jhjang742@gmail.com>';
  } else {
    ending = coauthorship;
  }
  return beginning + ending;
}

function prompter(cz, commit) {
  inquirer.prompt(questions).then((answers) => {
    formatCommit(commit, answers);
  });
}
