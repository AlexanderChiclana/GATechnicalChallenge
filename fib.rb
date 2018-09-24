def fib(input)
    sequence = []
    puts (1..input)

end

def fib (indexInput)
    sequence = []
    currentVal = 1
    i = 0

    while  i < indexInput   
        sequence.push(currentVal)
        

        if i < 1 
            currentVal = 1
        else 
            currentVal = sequence[i] + sequence[i - 1]
        

            i +=1
        end

    return sequence[sequence.length - 1]
end