function funcaoGenerica<T>(value: T): T {
    return value;
}

console.log(funcaoGenerica<number>(1))
console.log(funcaoGenerica<string>())
funcaoGenerica<boolean>()

