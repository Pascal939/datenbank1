function towerOfHanoi(n, source, helper, target) {
    if(n === 1) { //base case
        console.log(`Move disk ${n} from ${source} to ${target}.`)
        return
    }
    
    //move n - 1 from source (A) to helper (B) via target (C)
    towerOfHanoi(n - 1, source, target, helper) //recursion
    
    //move nth disk from source (A) to target (C) directly
    console.log(`Move disk ${n} from ${source} to ${target}`)
    
    //move n - 1 from helper (B) to target (C) via source (A)
    towerOfHanoi(n - 1, helper, source, target) //recur
}
debugger
towerOfHanoi(3, "A", "B", "C")