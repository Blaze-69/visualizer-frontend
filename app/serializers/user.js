import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin ,{
  primaryKey:"_id",

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log("user payload",payload);
   return this._super(store, primaryModelClass, payload, id, requestType) 
  }

});
