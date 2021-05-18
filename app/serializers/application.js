import DS from 'ember-data';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';
import { merge } from '@ember/polyfills';
export default DS.RESTSerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  },
  normalizeSingleResponse (store, primaryModelClass, payload, id, requestType) {
    let data = {};
    data[primaryModelClass.modelName] = payload;
    return this._normalizeResponse(store, primaryModelClass, data, id, requestType)
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
     var pluralTypeKey = pluralize(primaryModelClass.modelName);
     let data = {};
     data[pluralTypeKey] = payload;
     return this._normalizeResponse(store, primaryModelClass, data, id, requestType, false);
   },
   serializeIntoHash(hash, typeClass, snapshot, options) {
    merge(hash, this.serialize(snapshot, options));
  },
});