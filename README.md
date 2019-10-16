## vue prototypes

### Viewing a prototype
* Clone this repo
* Run `npm install` and then `webpack run js`
* Open `<new_prototype>/public/index.html` in a browser

### Adding a new prototype
Each new prototype should get it's own directory. The structure of this should follow this pattern:
 
```
    my_new_prototype ├── public
                     |  └── index.html
                     └── index.ts
                     

```

It will have to be manually added to the webpack config entry points as follows:

```
entry: {
        "my_new_prototype/public/js/index": './my_new_prototype/index.ts'
    }
```

Note that the entry key is the path at which the compiled file will be available. This will result in the following
after compilation:

```
    my_new_prototype ├── public
                     |  ├── index.js
                     |  └── index.html
                     └── index.ts                     

```

### Compiling
- sass is compiled using gulp - this task can be triggered by running `npm run sass` 
- js is bundled using webpack - this task can be triggered by running `npm run js`

Or to compile both at once, `npm run build`
