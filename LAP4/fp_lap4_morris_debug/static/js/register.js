pieceCount = document.getElementById('piece_count')
predictSubmit = document.getElementById('predict-submit')
predictResult = document.getElementById('result')

toEmail = document.getElementById('to-email')
mailSubmit = document.getElementById('mail-submit')

function validateSubmission(e) {
    predictSubmit.disabled = validatePieceCount()
}

function validatePieceCount() {
    return parseInt(pieceCount.value) < 20
}

function validateEmail(e) {
    mailSubmit.disabled = !e.target.value || !parseInt(predictResult.innerText)
}

validateSubmission()