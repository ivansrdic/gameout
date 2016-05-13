import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Market from '../../../components/private/market/market.jsx';

function composer({context, getInventory}, onData) {
  const itemsPublication = context.Meteor.subscribe('items');

  if(itemsPublication.ready()) {
    const otherItems = getInventory();
    NProgress.done();
    onData(null, {otherItems});
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