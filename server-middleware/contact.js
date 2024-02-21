
const app = require('express')()
const bodyParser = require('body-parser')
const Fibery = require('fibery-unofficial');
const fibery = new Fibery({ host: "veedoo.fibery.io", token: 'ded167ea.63db341695a2b43fc72fd20aa3d3564f0f0' });

app.use(bodyParser.json());
app.all('/contact', async (req, res) => {

    const { firstName, email, lastName, phone, message } = req.body;

    try {
        const player = await fibery.entity.createBatch([
            {
                'type': 'CRM and Sales/Contacts',
                'entity': {
                    'CRM and Sales/First Name': firstName,
                    'CRM and Sales/Work e-mail': email,
                    'CRM and Sales/Last Name': lastName,
                    'CRM and Sales/Phone #': phone,
                    'CRM and Sales/Message': phone,
                }
            }
        ]);


        res.json({ data: player })
    } catch (error) {
        res.json({ dataError: error })
    }

})

module.exports = app