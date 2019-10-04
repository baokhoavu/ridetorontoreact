// import { ARTICLE } from '../constants/action-types';
// import { ADD_ARTICLE } from '../constants/action-types';
// import { UPDATE_ARTICLE } from '../constants/action-types';
// import { DELETE_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

export const stateOfMind = (state, action) => {
	switch (action.type) {
		case 'ADD_ARTICLE':
			let newArticle = { article: action.data, id: +new Date };
			return state.concat([newArticle]);
		case 'DELETE_ARTICLE':
			// const articleId = action.data;
			// return state.filter(article => article.id !== articleId)
			return state.filter(({id}) => id !== action.data);
		default:
			return state || [];
	}
}

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE ) {
//   	// return Object.assign({}, state, {
//   	// 	articles: state.articles.concat(action.payload)
//   	// });
//   	// ...initialState,

//   }

//   if (action.type === UPDATE_ARTICLE ) {
//   	return Object.assign({}, state, {

//   	})
//   }

//   return state;
// };

export default stateOfMind;