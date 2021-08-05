function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
{
bar: "hello"
};
}
/* foo1 returns:
Object {bar: "hello"}
foo2 returns:
undefined 
because the code after return statement will be treated as
 unreachable code */
