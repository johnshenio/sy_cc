import 'core-js/stable';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/app.less';
import { createStore } from 'app/redux';
import { Root } from 'app/components/root';
import { Router } from 'app/routing';

function main(mainSelector) {
	const store = createStore();

	ReactDOM.render(
		(<Root
			store={store}
			router={Router}
		/>),
		document.querySelector(mainSelector),
	);

}

main('div#main');