const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// app.get('/kevin', (req, res) => 
// 	app.get
// 	jQuery.getJSON('https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTeamsByInfo&api_key=cfrca&v=1.0&fr_id=1761&list_page_size=500&response_format=json')	
// 	.then((response) => {
// 		console.log('parsed')
// 		console.log(JSON.parse(response));
// 		console.log('res')
// 		console.log(response);
// 		res.send(response)
//     })
// )

// jQuery.getJSON('https://secure.conquercancer.ca/site/CRTeamraiserAPI?method=getTeamsByInfo&api_key=cfrca&v=1.0&fr_id=1761&list_page_size=500&response_format=json')
//         .then(({data}) => this.setState({team:data}))
//         .then((res) => {
//           console.log('parsed')
//           console.log(JSON.parse(res));
//           console.log('res')
//           console.log(res);
//         })

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
