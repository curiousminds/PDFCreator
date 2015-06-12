var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/Insurance_Broker.pdf', function(req, res, next) {
    
    var PDFDocument = require('pdfkit');
    
    var doc = new PDFDocument({ Title: "ZeneHome Assign Agent Sheet" });
                              
    var date = new Date();
    
    var today = (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) + "/" + date.getDay() + "/" + date.getFullYear();
    
    var insurance = "Hartford Insurance";
    
    var policy = "AO2- 268-709326-70";
    
    var name = "Grumpy Cat";
    
    doc.fontSize('10');
    
    doc.text(today);
    
    doc.text('\n');
    
    doc.text('ZeneHome\n1149 3rd Street\nSuite 210\nSanta Monica, CA\n90401\n\n');
    
    doc.text('Dear ' + insurance + ',\n\n');
    
    doc.text('As of ' + today + ', Derek Ross of ZeneHome Insurance Services (California License #0I67833) has been designated as my exclusive insurance broker for all lines of coverage associated with my ' + insurance + ' Policy (' + policy + ').\n\n');
    
    doc.text('My ZeneHome Insurance Broker should be granted access to all of my relevant account information. The appointment of Derek Ross rescinds and supersedes all previous agent appointments and will remain in effect until cancelled in writing. Please include Derek Ross, (818) 996-0900, as the primary group contact and administrator on my policy, effective immediately.\n\n');
    
    doc.text('I act upon my ability to appoint and authorize an account administrator for all lines of coverage associated with my ' + insurance + ' Policy (' + policy + ').\n\n');
    
    doc.text('I authorize you to provide Derek Ross all relevant information he may request pertaining to my insurance and subscribers effective immediately.\n\n');
    
    doc.text('Imperatively, please designate Derek Ross as an authorized contact on my account and assign Derek Ross as my group administrator, effectively immediately.\n\n');
    
    doc.text('Thank you for your help in this matter. If you have any questions, please do not hesitate to contact ZeneHome at (323) 285-2076.\n\n');
    
    doc.text('Sincerely,\n\n');
    
    doc.text(name + '\n\n');
    
    doc.fontSize('30');
    
    doc.registerFont('Sign', 'cursive.ttf', 'Kristi');
    
    doc.font('Sign').text(name);

    doc.end();
    
    doc.pipe(res);
    
  //res.render('index', { title: 'Express' });
});

router.get('/Assign_Zenehome.pdf', function(req, res, next) {
    
    var PDFDocument = require('pdfkit');
    
    var doc = new PDFDocument({ Title: "ZeneHome Assign Agent Sheet" });
                              
    var date = new Date();
    
    var today = (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) + "/" + date.getDay() + "/" + date.getFullYear();
    
    var insurance = "Hartford Insurance";
    
    var policy = "AO2- 268-709326-70";
    
    var name = "Grumpy Cat";
    
    doc.fontSize('10');
    
    doc.text(today);
    
    doc.text('\n');
    
    doc.text('ZeneHome\n1149 3rd Street\nSuite 210\nSanta Monica, CA\n90401\n\n');
    
    doc.text('Dear Assessment Appeals Board,\n\n');
    
    doc.text('This authorizes Christopher Shafer (Tax Agent Registration #0032497) to act as an agent in assessment, appeals, and/or other tax matters for those properties owned or controlled by the undersigned according the authority indicated.\n\n');
    
    doc.text('Christopher Shafer has full authority to act in connection with the filed principal’s application for equalization, (copy must be attached) including withdrawal of such application, the ability to enter into a stipulated agreement as to value, and settlement of all related legal issues for the parcels and tax years indicated on the application. This authorization will end at the time your assessment appeals application is withdrawn or reaches its conclusion through the assessment appeal process.\n\n');
    
    doc.text('Christopher Shafer has full authority to handle all assessment matters with your office. Christopher Shafer shall have access to all information and materials that would be available to principal. Christopher Shafer may sign Property Statements as provided under California Revenue and Taxation Code, §441. The appointment of Christopher Shafer rescinds and supersedes all previous agent appointments and will remain in effect for a period of four years from the date of execution, unless earlier revoked in writing or terminated by operation of law.\n\n');
    
    doc.text('Christopher Shafer is not an individual who is employed, under contract, or otherwise receiving compensation to communicate directly, or through agents, employees or subcontractors, with any County official for the purpose of influencing official action –OR- if the Agent is a person representing himself, herself, an immediate family member or an entity of which the person is a partner, officer, or owner of ten percent or more of the value of the entity.\n\n');
    
    doc.text('Principal accepts full responsibility for any action of the agent carried out pursuant to the authority granted herein.\n\n');
    
    doc.text('I certify (or declare) under penalty of perjury under the laws of the State of California that the foregoing and all information hereon, including any accompanying statements or documents, is true, correct and complete to the best of my knowledge and belief.\n\n');
    
    doc.text('Thank you for your help in this matter. If you have any questions, please do not hesitate to contact ZeneHome at (323) 285-2076 or email us at support@zenehome.com.\n\n');
    
    doc.text('Sincerely,\n\n');
    
    doc.text(name + '\n\n');
    
    doc.fontSize('30');
    
    doc.registerFont('Sign', 'cursive.ttf', 'Kristi');
    
    doc.font('Sign').text(name);

    doc.end();
    
    doc.pipe(res);
    
  //res.render('index', { title: 'Express' });
});

module.exports = router;