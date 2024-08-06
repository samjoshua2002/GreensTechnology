#COUNT PRIMES: Write a function that returns the number of prime numbers that exist up to and including a given number
def count_primes(n):
    if n<2:
        return 0
    count=1
    for i in range(3,n+1):
        result=check_prime(i)
        if result=='prime':
            count +=1
    return count


def check_prime(i):

    for j in range(2,i):
        if i%j !=0:
            result='prime'
        else:
            result= 'not prime'
            break
    return result

n=int(input('Enter a number to find the number of prime numbers present from 0 to given number:'))
print(count_primes(n))