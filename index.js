const Evernote = require('evernote').Evernote
const promisify = require('es6-promisify')

const evernoteClient = new Evernote.Client({ token: process.env.EVERNOTE_TOKEN, sandbox: false })
const noteStore = evernoteClient.getNoteStore()
const copyNote = promisify(noteStore.copyNote)
const noteGuid = process.argv[2]
const toNotebookGuid = process.argv[3]

if (!noteGuid || !toNotebookGuid) {
	throw new Error('missing noteGuid or toNotebookGuid arguments')
}

copyNote(noteGuid, toNotebookGuid)
	.then(() => console.log('OK'))
	.catch((error) => { throw new Error(error) })