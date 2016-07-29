const Evernote = require('evernote').Evernote
const promisify = require('es6-promisify')

function copyTemplate(evernoteToken, noteGuid, toNotebookGuid) {
	console.log(evernoteToken, noteGuid, toNotebookGuid)
	if (!evernoteToken || !noteGuid || !toNotebookGuid) {
		throw new Error('missing one of the arguments')
	}

	const evernoteClient = new Evernote.Client({ token: evernoteToken, sandbox: false })
	const noteStore = evernoteClient.getNoteStore()
	const copyNote = promisify(noteStore.copyNote)

	return copyNote(noteGuid, toNotebookGuid)
}

module.exports = copyTemplate