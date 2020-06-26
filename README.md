# local-storage-js
Package for storage in localStorage of the browser, already has the conversion of objects to string and string to object again

### Methods

Code example:

```javascript

import Storage from 'local-storage-firmino'
// Save data
Storage.store('key', { name: '', email: ''})
// Recover data of storage
Storage.get('key')
// Remove data of key
Storage.delete('key')
// Verify if exists the key, return true if exists
Storage.exists('key')









