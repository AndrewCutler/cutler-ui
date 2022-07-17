## LOCAL TESTING

1. `cd lib`
2. `npm link`
3. In consuming app, `npm link cutler-ui`
4. In consuming app, `cd node_modules/react` and `npm link`
5. In **cutler-ui**, `npm link react`

This prevents error "You might have more than one copy of React in the same app".

## TODO

-   Chakra styling (e.g. fontSize='sm') is not being applied; interpolated literally as "font-size: sm;" in DOM
