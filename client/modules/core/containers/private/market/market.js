import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Market from '../../../components/private/market/market.jsx';

function composer({context}, onData) {
  const itemsPublication = context.Meteor.subscribe('items');

  if(itemsPublication.ready()) {
    NProgress.done();
    onData(null, {});
  }
}

function depsMapper(context, {Market, Profile}) {
  return ({
    getItems: Market.getItems,
    getInventory: Profile.getInventory,
    buyItem: Market.buyItem,
    context
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Market);