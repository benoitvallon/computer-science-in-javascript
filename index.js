/**
 * I don't need this as I plan to just test everything via tests instead.
 */

// https://github.com/sindresorhus/opn
//
// import dir from 'node-dir'
// import fs from 'fs'
// import inquirer from 'inquirer'
//
// const groups = [
//   'data-structures',
//   'sorting',
// ]
//
// const allFiles = fs.readdirSync('./data-structures/')
// const dataStructures = allFiles.filter((filename) => (
//   /\.js/.test(filename)
// ))
//
// // console.log(jsFiles)
//
// inquirer.prompt([
//   {
//     type: 'list',
//     name: 'topic',
//     message: 'Select a topic',
//     choices: [
//       'Data Structures',
//       new inquirer.Separator(),
//       'Sorting Algorithms',
//       new inquirer.Separator(),
//       'Big O Notation',
//     ]
//   },
//   {
//     type: 'list',
//     pageSize: 24,
//     name: 'ds',
//     message: 'Which data structure would you like to run?',
//     choices: dataStructures,
//     filter: function (val) {
//       return val.toLowerCase();
//     }
//   },
//
//   {
//     type: 'list',
//     pageSize: 24,
//     name: 'sorting',
//     message: 'Select your sorting algo?',
//     choices: ['dataStructures', 'andric'],
//     filter: function (val) {
//       return val.toLowerCase();
//     }
//   }
// ]).then(function (answers) {
//   console.log(JSON.stringify(answers, null, '  '));
// });
