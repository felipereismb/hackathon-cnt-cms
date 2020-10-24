import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({
  secretKey: 'com.folhacerta.muttuo',
});

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'folhacerta',
      storage,
      transforms: [encryptor],
    },
    reducers,
  );

  return persistedReducer;
};
