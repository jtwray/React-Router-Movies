function increment( count ) {
    return new Promise( ( resolve, reject ) =>
        count+=1
    setTimeout((){
            count+=1
            resolve(count)
        
        }, 1000 )
})
}