# Database

The database stores all its data in a javascript object. With paths the data can be created, manipulated or deleted. References can be created to paths, which can then be used for all actions, without having to specify the path again and again. It is also possible to move through the object tree with references. Caution! with references you always get a snapshot object back which can manipulate the data again separately, for sorting or other actions.
