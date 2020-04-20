const rawEmail = require('./rawMailSample.js');

const {parseJson} = require('../../../src/services/mail/incoming/parsers')




test('JSON Field Parsers', () => {
    console.log(rawEmail.dkim)
    const parsedEmail = parseJson(rawEmail, ['envelope', 'charsets']);
    expect(parsedEmail.envelope.to).toBeDefined()    
    expect(parsedEmail.charsets.html).toBe("us-ascii");    





})