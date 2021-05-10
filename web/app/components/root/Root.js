import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export default class Root extends React.Component {
	static propTypes = {
		store: PropTypes.object.isRequired,
		router: PropTypes.func.isRequired,
	};

	render() {
		const { store, router } = this.props;

		const Router = router;

		return (
			<div
				className="root"
			>
				<Provider
					store={store}
				>
					<Router />
				</Provider>
			</div>
		);
	}
}