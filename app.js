var pics = [
    "https://data.whicdn.com/images/332869925/original.jpg",
    "https://i.pinimg.com/originals/c7/89/eb/c789eb7c3d6f88dde518d9522149dd70.jpg",
    "https://i.pinimg.com/originals/31/67/2f/31672f86160fa870d6f70d6d813f63bf.jpg",
    "https://i.pinimg.com/originals/ac/a3/46/aca34649e8ee299187bd7c8af6f334da.jpg",
    "https://i2.wp.com/i.pinimg.com/originals/df/0d/67/df0d6794e236bc19960a83be39dc4ebf.png",
    "https://i.pinimg.com/originals/4d/1d/d3/4d1dd3a76355ea555acfd2adb6211cc6.jpg",
    "https://i.pinimg.com/originals/18/44/a6/1844a6800c6f63af674521bf9886216c.jpg",
    "https://i.pinimg.com/originals/f3/76/59/f376596e31ae3d0b22ba019210663c04.jpg",
    "imgs/girl 2.jpg",
    "https://i1.sndcdn.com/artworks-oyECYOX2UnkkHOzZ-ojPimQ-t500x500.jpg",
    "https://s3.amazonaws.com/lasvegas583/images/aesthetic-girl-aesthetic-makeup-beauty-girll1h8rkxz.jpg",
    "https://i.pinimg.com/236x/69/f2/1f/69f21fac510467a4adcd467bdb3d4056.jpg",
    "https://i.pinimg.com/236x/ee/6b/f6/ee6bf60ed6a85f97dd4666c7132f7ac5.jpg",
    "https://i.pinimg.com/736x/cc/d1/89/ccd189803d4b306c3c075cb6fa7d114e.jpg",
    "imgs/girl 1.jpg",

                                //9
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1 

btn.addEventListener("click", function(){
    if(counter === 15){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
});
