
require('svelte/register')
const Static = require('Static.svelte').default
console.log(Static.render().html)