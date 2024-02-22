
const app = require('express')()
const bodyParser = require('body-parser')
const Fibery = require('fibery-unofficial');
const fibery = new Fibery({ host: "veedoo.fibery.io", token: 'ded167ea.63db341695a2b43fc72fd20aa3d3564f0f0' });

app.use(bodyParser.json());

let GRAPHQL_API_CRM_SPACE_URL = 'https://veedoo.fibery.io/api/graphql/space/CRM_and_Sales';
const FIBERY_TOKEN = 'ded167ea.63db341695a2b43fc72fd20aa3d3564f0f0'

app.all('/contact', async (req, res) => {

    const { firstName, email, lastName, phone, message } = req.body;

    try {
        // const player = await fibery.entity.createBatch([
        //     {
        //         'type': 'CRM and Sales/Contacts',
        //         'entity': {
        //             'CRM and Sales/First Name': firstName,
        //             'CRM and Sales/Work e-mail': email,
        //             'CRM and Sales/Last Name': lastName,
        //             'CRM and Sales/Phone #': phone,
        //             'CRM and Sales/Message': phone,
        //         }
        //     }
        // ]);

      let query =`mutation{
  websiteMessages{
    create(
      email:"${email}",
      name:"${firstName} ${lastName}",
      phone:"${phone}",

    ){
      message,
      entities{
        id
      }

    }
  },

},`;

      let response = await fetch(GRAPHQL_API_CRM_SPACE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Token ${FIBERY_TOKEN}`,
        },
        body: JSON.stringify({ query }),

      });

      if(response.status !== 200){
        return res.json({status:false, dataError:'No new item was created' })
      }

      response = await response.json();

      let newItemId = response?.data?.websiteMessages?.create?.entities[0]?.id ?? null;

      if(!newItemId){
        return res.json({status:false, dataError: 'No new item was created' })
      }

      let messageQuery = `mutation{
  websiteMessages(id:{is:"${newItemId}"}){
    appendContentToMessage(value:"${message}"){message}
  }
}`

      response = await fetch(GRAPHQL_API_CRM_SPACE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Token ${FIBERY_TOKEN}`,
        },
        body: JSON.stringify({ query:messageQuery }),
      });





       return  res.json({ status: true })
    } catch (error) {
        return res.json({ status:false ,dataError: error })
    }

})

module.exports = { path: "/proxy", handler: app };
