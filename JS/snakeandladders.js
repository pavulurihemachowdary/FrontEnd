function move(pos)
{
    a=[32,36,62,88,95,97,1,4,8,21,28,50,71,88]
    b=[10,6,18,24,56,78,38,14,30,42,76,67,92,99]
    p= Math.round(Math.random()*6);
    console.log("roll "+p)
    pos=pos+p;
    for(i=0;i<14;i++)
    {
        if(pos==a[i])
            return b[i];
    }
    while(pos>100)
    {
        pos=pos-p;
        p= Math.round(Math.random()*6);
        pos=pos+p;
    }
    return pos;
    
}
n=2
p1=0;p2=0;
while(p1<100 && p2<100)
{
    console.log("*Player 1*");
    p1=move(p1);
    console.log("position "+p1);
    if(p1==100)
    {
        console.log("Player 1 wins");
        break;
    }
    console.log("*Player 2*");
    p2=move(p2);
		console.log("position "+p2);
    if(p2==100)
    {
        console.log("Player 2 wins");
        break;
    }
}
