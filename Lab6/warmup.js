

const original = {name: 'Knox', km: 2.8};
const alias = original;
const copy = { ...original };
alias.km = 99; // what is original.km now? -> original.km = 99
copy.km = 1; // and now? -> original.km = 99
const outer = { name: 'X', meta: { tags: ['steep'] } };
const shallow = { ...outer };
shallow.meta.tags.push('rocky'); // what is outer.meta.tags? -> ['steep', 'rocky']
({ x: 1 } === { x: 1 }) // condition will always return 'false'