const foo = lastlyDeclared;

const bar = () => {
    console.log(lastlyDeclared);
}

function baz() {
    console.log(lastlyDeclared);
}

const lastlyDeclared = 1;

export default 1;