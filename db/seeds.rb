# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Listing.destroy_all

u1 = User.create!(
    email: 'demo',
    password: 'password'
)

listing1 = Listing.create!( 
    title: 'Vintage Gibson for sale', 
    brand: 'Gibson', 
    model: 'les Paul', 
    price: 4560, 
    description: 'Vintage Gibson from the 80s for sale',
    category: 'guitar' 
) 

file = File.open('app/assets/images/gibson.jpg')

listing1.photo.attach(io: file, filename: 'gibson.jpg')




listing2 = Listing.create!( 
    title: 'fender stratocaster for sale', 
    brand: 'Fender', 
    model: 'stratocaster', 
    price: 2200, 
    description: 'brand new strat for sale',
    category: 'guitar' 
) 

file2 = File.open('app/assets/images/gibson.jpg') # URI.open('https://harmonic-aa-seed.s3.amazonaws.com/1975FenderStratocasterGilmour-6.jpg')

listing2.photo.attach(io: file2, filename: 'fender')



listing3 = Listing.create!( 
    title: 'PRS for sale', 
    brand: 'PRS', 
    model: 'custom 24', 
    price: 3480, 
    description: 'PRS from the early 2000s for sale',
    category: 'guitar' 
) 

file3 = File.open('app/assets/images/gibson.jpg') # URI.open('https://harmonic-aa-seed.s3.amazonaws.com/DSC06315_2-dPMgKYfs-scaled.jpg')

listing3.photo.attach(io: file3, filename: 'prs')



listing4 = Listing.create!( 
    title: 'ESP for sale', 
    brand: 'ESP', 
    model: 'Eclipse II', 
    price: 2500, 
    description: 'ESP Eclipse II FT for sale, hard to find!',
    category: 'guitar' 
) 

file4 = File.open('app/assets/images/gibson.jpg') # URI.open('https://harmonic-aa-seed.s3.amazonaws.com/esp-eclipse-ii-distressed-e28093-beauty-shot.jpg')

listing4.photo.attach(io: file4, filename: 'esp')



listing5 = Listing.create!( 
    title: 'Strandberg for sale', 
    brand: 'Strandberg', 
    model: 'Boden', 
    price: 2500, 
    description: 'hard to find strandberg for sale!',
    category: 'guitar' 
) 

file5 = File.open('app/assets/images/gibson.jpg') # URI.open('https://harmonic-aa-seed.s3.amazonaws.com/BodenOrginal.jpg')

listing5.photo.attach(io: file5, filename: 'strandberg')

listing6 = Listing.create!( 
    title: 'Strandberg for sale', 
    brand: 'Strandberg', 
    model: 'Boden', 
    price: 3500, 
    description: 'even harder to find strandberg bass for sale!' ,
    category: 'bass' 
) 

file6 = File.open('app/assets/images/gibson.jpg') # URI.open('https://harmonic-aa-seed.s3.amazonaws.com/strandbergbass.jpg')

listing6.photo.attach(io: file6, filename: 'strandberg')

listing7 = Listing.create!( 
    title: 'cool ibanez bass', 
    brand: 'Ibanez', 
    model: 'SR400EQM', 
    price: 500, 
    description: 'lovely ibanez bass, need to make room for next bass',
    category: 'bass' 
) 

file7 = File.open('app/assets/images/gibson.jpg') # URI.open('https://harmonic-aa-seed.s3.amazonaws.com/ibanezbass.jpg')

listing7.photo.attach(io: file7, filename: 'ibanez')

listing8 = Listing.create!( 
    title: 'Brand new Fender bass for sale', 
    brand: 'Fender', 
    model: 'american ultra', 
    price: 2500, 
    description: 'new ultra series for bass, never opened. found a great deal on dream guitar',
    category: 'bass'  
) 

file8 = File.open('app/assets/images/gibson.jpg') # URI.open('https://harmonic-aa-seed.s3.amazonaws.com/fender-american-ultra-precision-bass-mn-apl.jpg')

listing8.photo.attach(io: file8, filename: 'fender')

listing9 = Listing.create!( 
    title: 'a timeless classic', 
    brand: 'Rickenbacker', 
    model: '4003s', 
    price: 17149, 
    description: 'you can never go wrong with a timeless classic such as the household name of Rickenbacker. quality of the past present today!',
    category: 'bass' 
) 

file9 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/rickenbackerbass.jpg')

listing9.photo.attach(io: file9, filename: 'rickenbacker')

listing10 = Listing.create!( 
    title: 'the only bass you will ever need', 
    brand: 'Shecter', 
    model: 'Stileto', 
    price: 699, 
    description: 'unique design, workhorse, what more can i say?',
    category: 'bass' 
) 

file10 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/schecterbass.jpg')

listing10.photo.attach(io: file10, filename: 'schecter')



listing11 = Listing.create!( 
    title: 'nice silent drum kit', 
    brand: 'Alesis', 
    model: 'e drum', 
    price: 499, 
    description: 'a must have for drummers looking to drum in silence for family members or apartments!',
    category: 'drum' 
) 

file11 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/alesisdrum.jpg')

listing11.photo.attach(io: file11, filename: 'alesis')



listing12 = Listing.create!( 
    title: 'pearl drum set', 
    brand: 'Pearl', 
    model: 'drum', 
    price: 350, 
    description: 'nice beginner drum set, used by daughter. now she is on to a new drum set',
    category: 'drum' 
) 

file12 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/pearldrum.jpg')

listing12.photo.attach(io: file12, filename: 'pearl')



listing13 = Listing.create!( 
    title: 'drums!', 
    brand: 'Yamaha', 
    model: 'drum', 
    price: 450, 
    description: 'nice drum set left in apartment',
    category: 'drum' 
) 

file13 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/yamahadrum.jpg')

listing13.photo.attach(io: file13, filename: 'yamaha')


listing14 = Listing.create!( 
    title: 'unique meinl congas!', 
    brand: 'Meinl', 
    model: 'congas', 
    price: 350, 
    description: 'meinl woodworks congas for sale, well taken care of',
    category: 'drum' 
) 

file14 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/meinldrums.jpg')

listing14.photo.attach(io: file14, filename: 'meinl')


listing15 = Listing.create!( 
    title: 'intermediate level drum set', 
    brand: 'ludwig', 
    model: 'drum', 
    price: 600, 
    description: 'looking to step up from that beginner set? look no further!',
    category: 'drum' 
) 

file15 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/ludwigdrum.jpg')

listing15.photo.attach(io: file15, filename: 'ludwig')



listing16 = Listing.create!( 
    title: 'portable organ piano for sale', 
    brand: 'Hammond', 
    model: 'XK-1c portable organ', 
    price: 1565, 
    description: 'all the sounds of an organ in a compact portable design',
    category: 'keyboard' 
) 

file16 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/hammondorgan.jpg')

listing16.photo.attach(io: file16, filename: 'hammond')



listing17 = Listing.create!( 
    title: 'synth for sale', 
    brand: 'Korg', 
    model: 'microKORG', 
    price: 429, 
    description: 'well maintained synth for sale, all features working',
    category: 'keyboard' 
) 

file17 = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/korgsynth.jpg')

listing17.photo.attach(io: file17, filename: 'korg')



listing = Listing.create!( 
    title: 'theramin!!!', 
    brand: 'Moog', 
    model: 'theramin', 
    price: 349, 
    description: 'if youve ever wondered if you should get a thermanin, the answer is yes',
    category: 'keyboard' 
) 

file = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/moogtheramin.jpg')

listing.photo.attach(io: file, filename: 'moog')



listing = Listing.create!( 
    title: 'digital piano', 
    brand: 'williams', 
    model: 'rhapsody 2', 
    price: 469, 
    description: 'essential for anyone who wants to play piano but no space for a full size piano',
    category: 'keyboard' 
) 

file = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/williams.jpg')

listing.photo.attach(io: file, filename: 'williams')



listing = Listing.create!( 
    title: 'yamaha piano for sale', 
    brand: 'Yamaha', 
    model: 'NP12 piagerro', 
    price: 350, 
    description: 'speaks for itself, eveyone needs one of these to begin',
    category: 'keyboard' 
) 

file = File.open('app/assets/images/gibson.jpg') #URI.open('https://harmonic-aa-seed.s3.amazonaws.com/yamahedigital.jpg')

listing.photo.attach(io: file, filename: 'yamaha')


