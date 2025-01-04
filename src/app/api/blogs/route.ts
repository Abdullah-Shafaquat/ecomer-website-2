import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  if (id) {
    const product = blogContent.find((product) => product.id === parseInt(id));
    if (product) {
      return NextResponse.json(product);
    } 
  } else {
    return NextResponse.json(blogContent);
  }
};
interface SubHeadingContent {
    subHeading: string;
    text: string;
  }
  
  interface Section {
    heading: string;
    content: SubHeadingContent[];
    contents: string;
  }
  
  interface Blog {
    id: number;
    title: string;
    content: string;
    sections: Section[];
  }
  

const blogContent:Blog [] = [
    {
      id: 1,
      title: "Mastering Style: How to Select the Ideal Men's Watch for Every Occasion",
      content: "A watch is much more than a tool for keeping time—it's an accessory that speaks volumes about your personality, style, and sophistication. Whether you're attending a wedding, heading to a business meeting, or enjoying a casual outing, the right watch can elevate your outfit and help you make a lasting impression. But with so many styles, features, and designs available, how do you choose the ideal men’s watch for every occasion? In this guide, we’ll take you through the essential factors to consider when selecting the perfect watch, no matter the event.",
      sections: [
        {
            heading: "1. Understand the Importance of the Occasion",
            content: [
                {
                    subHeading: "Formal Events (Weddings, Galas, Black-Tie Functions)",
                    text: "For high-end, formal occasions, opt for a sleek dress watch with a minimalist design. Look for a watch with a thin case, a clean dial, and a high-quality leather strap or a polished metal bracelet. Avoid watches with too many complications, as these can detract from the sophisticated aesthetic you're aiming for."
                },
                {
                    subHeading: "Business and Professional Settings",
                    text: "In business environments, your watch should reflect professionalism and sophistication. Choose a simple, elegant watch with neutral tones and avoid overly flashy designs that could overshadow your attire. A well-chosen watch can also give a sense of punctuality and attention to detail, which is valued in corporate settings."
                },
                {
                    subHeading: "Casual Events (Weekend Outings, Brunches, Informal Gatherings)",
                    text: "For more laid-back occasions, you can choose a sportier design with a fabric or rubber strap. Casual events allow for more expressive styles, so you can afford to experiment with bolder designs or colorful dials. While style is important, comfort and ease should also guide your selection."
                },
                {
                    subHeading: "Outdoor and Adventure Activities (Hiking, Swimming, Sports)",
                    text: "Durability and functionality are key. Select a dive watch or sports watch with features like water resistance, rugged straps, and shockproof properties. These watches are built to withstand the elements, ensuring they stay reliable even in the harshest conditions."
                }
            ],
            contents: ""
        },
        {
            heading: "2. Select the Right Strap for Comfort and Style",
            content: [
                { subHeading: "Leather Straps", text: "Ideal for dress watches and formal occasions, leather straps add elegance and comfort. They also age well over time, developing a unique patina that enhances the character of your watch." },
                { subHeading: "Metal Bracelets", text: "Versatile and durable, metal bracelets suit both business and casual settings. Stainless steel, titanium, and precious metals like gold or silver provide different aesthetic choices for various occasions." },
                { subHeading: "Rubber or Silicone Straps", text: "Perfect for outdoor activities, these straps are lightweight, flexible, and easy to clean. They are often used for sports watches due to their resistance to sweat and moisture." },
                { subHeading: "Fabric Straps", text: "Casual and expressive, fabric straps are great for relaxed settings. They come in various colors and patterns, adding a personal touch to your watch while offering comfort and breathability." }
            ],
            contents: ""
        },
        {
            heading: "3. Match the Watch to Your Personal Style",
            content: [
                { subHeading: "Minimalist Style", text: "Opt for a simple dial and monochromatic colors for a clean look. A minimalist watch typically features fewer complications and emphasizes a streamlined design." },
                { subHeading: "Bold and Statement-Making", text: "Choose oversized cases, intricate dials, and unique features to stand out. This style is perfect for those who love to make a bold fashion statement and express their personality through accessories." },
                { subHeading: "Classic and Timeless", text: "Stick with traditional designs that never go out of fashion. Classic watches with simple dials, Roman numerals, and leather bands are perfect for those who prefer a sophisticated and timeless look." }
            ],
            contents: ""
        },
        {
            heading: "4. Focus on Watch Size and Fit",
            content: [
                { subHeading: "Dial Size", text: "Match the watch face size to your wrist size for a balanced look. Larger faces work well with broader wrists, while smaller faces suit those with more delicate frames." },
                { subHeading: "Thickness of the Watch", text: "Thin watches suit formal occasions, while bulkier ones are great for casual or adventurous settings. Keep in mind the comfort of wearing the watch as well as the visual appeal." }
            ],
            contents: ""
        },
        {
            heading: "5. Choose the Right Features",
            content: [
                { subHeading: "Chronographs", text: "For functionality and style, a chronograph adds sophistication. It offers additional features like stopwatch capabilities, making it a useful tool for athletes or anyone who values precision timing." },
                { subHeading: "Date Complication", text: "Useful for tracking dates, this feature adds practicality without overwhelming the design. Watches with date complications are often seen as practical daily wear options." },
                { subHeading: "Water Resistance", text: "Essential for outdoor enthusiasts and water-related activities. A watch with water resistance ensures it can withstand various environmental elements like rain, swimming, and even diving." }
            ],
            contents: ""
        },
        {
            heading: "6. Set a Budget and Make an Informed Investment",
            contents: "Set a budget that aligns with your needs and preferences. Quality watches are available at various price points, and a good investment can last for decades. Keep in mind that premium watches are often crafted with superior materials, so it's worth considering longevity and craftsmanship over immediate costs.",
            content: []
        },
        {
            heading: "7. Coordinate with Your Other Accessories",
            contents: "Ensure your watch complements your accessories, such as belts, shoes, and wallets, for a cohesive style. Opt for matching metal tones, leather types, and design elements to create a unified and polished appearance.",
            content: []
        },
        {
            heading: "Conclusion",
            contents: "Selecting the right men’s watch for any occasion is about more than just checking the time—it’s about making a statement and completing your overall look. By considering the occasion, strap material, personal style, watch size, features, and budget, you can find the perfect timepiece that fits seamlessly into your lifestyle.",
            content: []
        }
      ]
    },



    {
        id : 2,
      title: "The Ultimate Guide to Choosing the Perfect Men's Hoodie Jacket for Every Season",
      content: "A hoodie jacket is one of the most versatile pieces of clothing in a man’s wardrobe. Whether you're looking for something stylish, comfortable, or functional, a hoodie can meet all of these needs. It’s a great layering piece that can be worn year-round, from the chilly mornings of fall to the brisk days of winter. In this guide, we’ll explore how to choose the perfect men’s hoodie jacket for every season and occasion.",
      sections: [
        {
            heading: "1. Understanding the Different Types of Hoodie Jackets",
            content: [
                {
                    subHeading: "Zip-Up Hoodie",
                    text: "Perfect for layering, zip-up hoodies are easy to take on and off. They’re ideal for transitioning between indoor and outdoor environments. The zipper provides additional ventilation options, making it versatile for fluctuating temperatures."
                },
                {
                    subHeading: "Pullover Hoodie",
                    text: "A classic option for warmth and style, the pullover hoodie is cozy and offers a snug fit. This design is timeless and works well for both lounging at home and casual outings."
                },
                {
                    subHeading: "Fleece Hoodie",
                    text: "Ideal for colder weather, fleece hoodies offer extra warmth and softness, making them perfect for outdoor activities or lounging. The insulating material helps trap body heat, ensuring comfort during colder months."
                },
                {
                    subHeading: "Athletic Hoodie",
                    text: "Designed for active use, athletic hoodies are made from moisture-wicking fabrics and feature a more fitted design, often with ventilation panels to enhance breathability. These are perfect for workouts and sports activities."
                }
            ],
            contents: ""
        },
        {
            heading: "2. Material Matters: Choosing the Right Fabric",
            content: [
                { subHeading: "Cotton", text: "Soft, breathable, and comfortable, cotton is a great choice for everyday wear. It’s ideal for mild weather, offering a balance of comfort and breathability." },
                { subHeading: "Polyester", text: "Often used for performance wear, polyester is moisture-wicking and more durable than cotton. It’s perfect for athletic or outdoor activities where sweat and durability are a concern." },
                { subHeading: "Fleece", text: "Known for its insulating properties, fleece is great for colder weather. It's soft, warm, and provides extra comfort during the winter. Fleece also has a soft texture that makes it cozy for lounging." },
                { subHeading: "Wool", text: "For an added layer of warmth, wool is an excellent choice, especially for those who live in colder climates. Wool is naturally moisture-wicking and helps regulate body temperature, making it perfect for winter." }
            ],
            contents: ""
        },
        {
            heading: "3. Styling Your Hoodie Jacket",
            content: [
                {
                    subHeading: "Casual Look",
                    text: "Pair a zip-up or pullover hoodie with jeans and sneakers for a relaxed, everyday look. This is perfect for weekend outings or errands. Keep the colors neutral to keep the style grounded."
                },
                {
                    subHeading: "Street Style",
                    text: "To achieve a trendy street-style look, go for an oversized hoodie jacket and layer it with a denim jacket or bomber jacket. Add some joggers and high-top sneakers to complete the ensemble. This look is perfect for those who want to make a bold style statement."
                },
                {
                    subHeading: "Sporty Vibes",
                    text: "Pair an athletic hoodie with workout leggings or sweatpants for a sporty look. This is perfect for the gym, running errands, or a casual day at home. Opt for darker colors for a sleek, athletic aesthetic."
                },
                {
                    subHeading: "Layered for Cold Weather",
                    text: "In colder climates, layer your hoodie jacket with a puffer jacket or a leather jacket for extra warmth. Pair it with boots for a rugged winter look. The layering approach allows you to adjust your comfort level depending on the weather."
                }
            ],
            contents: ""
        },
        {
            heading: "4. Choosing the Right Fit",
            content: [
                { subHeading: "Slim Fit", text: "A slim-fit hoodie jacket will give you a more tailored appearance. It’s perfect for layering under jackets or coats without adding bulk." },
                { subHeading: "Regular Fit", text: "A regular fit is comfortable and allows for easy movement. It’s perfect for those who prefer a more relaxed style." },
                { subHeading: "Oversized Fit", text: "The oversized hoodie jacket is currently in trend, offering a casual and laid-back look. It's ideal for street style and comfort." }
            ],
            contents: ""
        },
        {
            heading: "5. How to Care for Your Hoodie Jacket",
            content: [
                { subHeading: "Wash Regularly", text: "Make sure to wash your hoodie jacket regularly to keep it fresh and clean. Use cold water and avoid using harsh detergents to preserve the fabric." },
                { subHeading: "Air Dry", text: "To prevent shrinkage, air-dry your hoodie jacket instead of using a dryer." },
                { subHeading: "Store Properly", text: "Fold or hang your hoodie jacket to avoid wrinkles and keep it in good condition." }
            ],
            contents: ""
        },
        {
            heading: "6. Conclusion: Investing in a Quality Hoodie Jacket",
            contents: "A good-quality men’s hoodie jacket is a must-have for every wardrobe. It provides warmth, comfort, and versatility, making it suitable for various occasions. Whether you're dressing for comfort at home, running errands, or heading to the gym, a hoodie jacket can complement your style. When selecting one, consider the material, fit, and the season to ensure that your hoodie meets both your fashion and functional needs.",
            content: []
        }
      ] ,
      
    },





    {
        id: 3,
        title: "The Ultimate Guide to Men's Footwear for Every Occasion",
        content: "Footwear is a fundamental element of every outfit, reflecting your personal style and ensuring comfort and functionality. From business meetings to weekend outings, selecting the right footwear for the occasion is crucial. In this guide, we’ll walk you through the key types of men’s footwear and how to style them.",
        sections: [
          {
              heading: "1. Dress Shoes for Formal Occasions",
              content: [
                  { subHeading: "Oxford Shoes", text: "These are the epitome of elegance and are ideal for formal events like weddings and business meetings. Pair them with a tailored suit for a polished look." },
                  { subHeading: "Derby Shoes", text: "Similar to Oxfords but slightly more casual, Derby shoes can be paired with both suits and smart-casual outfits." },
                  { subHeading: "Monk Straps", text: "Featuring a strap and buckle instead of laces, monk straps are a stylish alternative to traditional dress shoes. They add a unique touch to formal wear." },
                  { subHeading: "Patent Leather Shoes", text: "Highly glossy and sleek, these are perfect for black-tie events. They pair beautifully with tuxedos and formal evening attire." }
              ],
              contents: ""
          },
          {
              heading: "2. Casual Footwear for Everyday Wear",
              content: [
                  { subHeading: "Sneakers", text: "Perfect for relaxed settings, sneakers are versatile and comfortable. Pair them with jeans and a t-shirt for a classic casual look." },
                  { subHeading: "Loafers", text: "Great for smart-casual outfits, loafers strike a balance between formal and casual styles. They can be worn with chinos or even tailored shorts." },
                  { subHeading: "Espadrilles", text: "Lightweight and breathable, espadrilles are perfect for summer outings. They pair well with linen pants or shorts." },
                  { subHeading: "Boat Shoes", text: "Ideal for a preppy style, boat shoes can be worn with chinos or khakis. They're a go-to choice for casual summer outings." }
              ],
              contents: ""
          },
          {
              heading: "3. Footwear for Outdoor and Active Use",
              content: [
                  { subHeading: "Hiking Boots", text: "Designed for rugged terrain, hiking boots offer durability, grip, and support. They are essential for outdoor adventures." },
                  { subHeading: "Trail Running Shoes", text: "These shoes are lightweight yet durable, making them ideal for running on uneven surfaces or light trekking." },
                  { subHeading: "Waterproof Boots", text: "For rainy or wet conditions, waterproof boots keep your feet dry and comfortable without sacrificing style." },
                  { subHeading: "Sandals for Outdoor Activities", text: "Sport sandals with durable soles are great for hiking or walking in warm weather. They provide breathability and grip." }
              ],
              contents: ""
          },
          {
              heading: "4. Seasonal Footwear Tips",
              content: [
                  { subHeading: "Summer", text: "Opt for breathable materials like canvas or leather. Sandals, espadrilles, and lightweight sneakers are great choices for staying cool." },
                  { subHeading: "Winter", text: "Choose insulated and weatherproof footwear like leather boots or snow boots. Look for styles with good traction for icy surfaces." },
                  { subHeading: "Spring/Autumn", text: "Transition seasons call for versatile shoes like loafers, desert boots, or sneakers. Layer-friendly options work best during these times." },
                  { subHeading: "Rainy Season", text: "Invest in waterproof or rubber-soled shoes to protect your feet during heavy rains. Stylish rain boots can be both practical and fashionable." }
              ],
              contents: ""
          },
          {
              heading: "5. Tips for Maintaining Your Footwear",
              content: [
                  { subHeading: "Regular Cleaning", text: "Clean your shoes regularly to remove dirt and prevent stains. Use a soft brush or cloth and appropriate cleaning products for different materials." },
                  { subHeading: "Proper Storage", text: "Store your footwear in a cool, dry place. Use shoe trees to maintain their shape, especially for leather shoes." },
                  { subHeading: "Invest in Quality", text: "High-quality shoes may cost more upfront but last longer and provide better comfort and style." },
                  { subHeading: "Polishing and Conditioning", text: "Polish leather shoes regularly to maintain their shine, and condition them to prevent cracking or drying out." }
              ],
              contents: ""
          },
          {
              heading: "6. Special Occasion Footwear",
              content: [
                  { subHeading: "Wedding Shoes", text: "For weddings, opt for polished Oxfords or patent leather shoes to complement a formal suit or tuxedo." },
                  { subHeading: "Party Footwear", text: "Dressy loafers or sleek monk straps are excellent choices for cocktail parties or semi-formal gatherings." },
                  { subHeading: "Cultural Events", text: "For traditional events, explore ethnic footwear like moccasins or embroidered shoes that align with cultural attire." }
              ],
              contents: ""
          },
          {
              heading: "7. Choosing Footwear Based on Foot Type",
              content: [
                  { subHeading: "Flat Feet", text: "Look for shoes with arch support to reduce strain and improve comfort." },
                  { subHeading: "Wide Feet", text: "Opt for shoes with wider toe boxes to avoid discomfort and ensure a better fit." },
                  { subHeading: "High Arches", text: "Choose shoes with cushioning and flexibility to absorb impact and provide support." }
              ],
              contents: ""
          }
        ]
      } ,







      

      {
        id: 4,
        title: "A Comprehensive Guide to Women's T-Shirts: Styles, Trends, and Tips",
        content: "Women's T-shirts are a wardrobe staple that combine comfort with style. From casual outings to semi-formal gatherings, the right T-shirt can elevate any look. In this guide, we’ll explore the popular styles, how to style them, and tips for choosing the perfect fit.",
        sections: [
          {
              heading: "1. Popular Styles of Women's T-Shirts",
              content: [
                  { subHeading: "Crew Neck T-Shirts", text: "A classic style with a round neckline, perfect for layering or wearing on its own. Ideal for casual and semi-casual looks." },
                  { subHeading: "V-Neck T-Shirts", text: "Flattering and versatile, V-neck T-shirts can elongate the neckline and pair well with necklaces." },
                  { subHeading: "Graphic Tees", text: "Showcase your personality with bold prints, slogans, or artistic designs. Great for casual and creative looks." },
                  { subHeading: "Oversized T-Shirts", text: "Comfortable and trendy, oversized T-shirts can be styled with leggings or tucked into jeans for a laid-back vibe." },
                  { subHeading: "Crop Tops", text: "These shorter T-shirts are perfect for high-waisted pants or skirts, offering a chic and youthful style." }
              ],
              contents: ""
          },
          {
              heading: "2. Choosing the Right Fabric",
              content: [
                  { subHeading: "Cotton", text: "Soft, breathable, and durable, cotton T-shirts are perfect for everyday wear." },
                  { subHeading: "Linen", text: "Lightweight and airy, linen T-shirts are great for summer months." },
                  { subHeading: "Polyester", text: "Durable and wrinkle-resistant, polyester T-shirts are ideal for athletic and active wear." },
                  { subHeading: "Blends", text: "T-shirts made from fabric blends combine the best qualities of materials like cotton and spandex for added stretch and comfort." }
              ],
              contents: ""
          },
          {
              heading: "3. Styling Tips for Women's T-Shirts",
              content: [
                  { subHeading: "Casual Outfits", text: "Pair a crew neck or graphic tee with jeans and sneakers for a relaxed look." },
                  { subHeading: "Layering", text: "Style a plain T-shirt under a blazer or cardigan for a smart-casual outfit." },
                  { subHeading: "Accessorizing", text: "Enhance your look with statement necklaces, scarves, or belts to add personality." },
                  { subHeading: "Tuck It In", text: "Tuck your T-shirt into high-waisted pants or skirts for a polished appearance." },
                  { subHeading: "Knot It", text: "Tie a knot at the hem of your T-shirt for a trendy, cropped effect." }
              ],
              contents: ""
          },
          {
              heading: "4. Trends in Women's T-Shirts",
              content: [
                  { subHeading: "Sustainable Fashion", text: "Eco-friendly T-shirts made from organic or recycled materials are gaining popularity." },
                  { subHeading: "Minimalist Designs", text: "Simple and understated styles are perfect for creating a clean, modern look." },
                  { subHeading: "Vintage Graphics", text: "Retro-inspired prints and logos are a major trend in casual wear." },
                  { subHeading: "Tie-Dye", text: "This playful, colorful style continues to be a favorite for casual and beachwear." }
              ],
              contents: ""
          },
          {
              heading: "5. Tips for Buying the Perfect T-Shirt",
              content: [
                  { subHeading: "Know Your Fit", text: "Decide if you prefer a relaxed, fitted, or oversized style to suit your body shape and comfort." },
                  { subHeading: "Check the Length", text: "Ensure the length complements your outfit—cropped, standard, or tunic length." },
                  { subHeading: "Quality Matters", text: "Look for durable stitching and soft, high-quality fabrics to ensure longevity." },
                  { subHeading: "Versatility", text: "Opt for neutral colors and simple designs for easy pairing with various outfits." }
              ],
              contents: ""
          },
          {
              heading: "6. Seasonal Picks for Women's T-Shirts",
              content: [
                  { subHeading: "Summer", text: "Lightweight fabrics like linen and cotton are perfect for keeping cool." },
                  { subHeading: "Winter", text: "Layered looks with long-sleeve T-shirts or thermal blends are ideal for colder months." },
                  { subHeading: "Spring", text: "Opt for pastel colors and floral prints to match the season's vibe." },
                  { subHeading: "Autumn", text: "Earthy tones and graphic prints are perfect for fall fashion." }
              ],
              contents: ""
          },
          {
              heading: "7. Customization and Personalization",
              content: [
                  { subHeading: "DIY Designs", text: "Express your creativity by customizing plain T-shirts with embroidery, patches, or paint." },
                  { subHeading: "Personalized Printing", text: "Create unique T-shirts with names, quotes, or special designs for personal or gifting purposes." },
                  { subHeading: "Brand Collaborations", text: "Explore limited edition designs by popular brands and influencers for exclusive styles." }
              ],
              contents: ""
          },
          {
              heading: "8. Care and Maintenance",
              content: [
                  { subHeading: "Washing Tips", text: "Turn your T-shirts inside out and wash in cold water to preserve prints and colors." },
                  { subHeading: "Drying", text: "Air dry or use low heat in the dryer to prevent shrinking or fading." },
                  { subHeading: "Storage", text: "Fold your T-shirts neatly to avoid wrinkles and store them in a cool, dry place." },
                  { subHeading: "Avoid Overwashing", text: "Wash only when necessary to maintain fabric quality and reduce environmental impact." }
              ],
              contents: ""
          }
        ]},







        {
            id: 5,
            title: "Exploring the World of Women's Handbags: Styles, Trends, and Tips",
              content: "Handbags are more than just accessories; they are a statement of style and functionality. This guide delves into the diverse world of women's handbags, offering insights into their styles, trends, and practical tips for making the right choice.",
            "sections": [
              {
                  heading: "1. Popular Styles of Women's Handbags",
                  content: [
                      { subHeading: "Tote Bags", text: "Spacious and versatile, tote bags are ideal for work, shopping, or casual outings." },
                      { subHeading: "Crossbody Bags", text: "With a long strap for hands-free convenience, crossbody bags are perfect for everyday use." },
                      { subHeading: "Clutches", text: "Compact and elegant, clutches are designed for formal events and parties." },
                      { subHeading: "Shoulder Bags", text: "A classic design that hangs from one shoulder, offering style and practicality." },
                      { subHeading: "Backpacks", text: "A trendy option for casual wear, backpacks offer comfort and ample storage." },
                      { subHeading: "Hobo Bags", text: "With their slouchy, crescent shape, hobo bags are stylish and roomy." },
                      { subHeading: "Satchels", text: "Structured and professional, satchels are perfect for office wear." }
                  ],
                  contents: ""
              },
              {
                  heading: "2. Choosing the Right Material",
                  content: [
                      { subHeading: "Leather", text: "Durable and timeless, leather bags offer a luxurious feel and lasting quality." },
                      { subHeading: "Canvas", text: "Lightweight and casual, canvas bags are perfect for everyday use and travel." },
                      { subHeading: "Synthetic", text: "Affordable and available in various designs, synthetic bags cater to diverse tastes." },
                      { subHeading: "Eco-Friendly Materials", text: "Sustainable materials like cork or recycled fabrics are gaining popularity for their environmental benefits." }
                  ],
                  contents: ""
              },
              {
                  heading: "3. Styling Tips for Women's Handbags",
                  content: [
                      { subHeading: "Matching Your Outfit", text: "Choose a handbag that complements your outfit's color scheme and style." },
                      { subHeading: "Occasion Matters", text: "Opt for clutches or evening bags for formal events and larger bags for casual outings." },
                      { subHeading: "Mix Textures", text: "Experiment with different textures to add dimension to your overall look." },
                      { subHeading: "Proportional Sizing", text: "Choose a bag size that suits your body type and balances your outfit." }
                  ],
                  contents: ""
              },
              {
                  heading: "4. Trends in Women's Handbags",
                  content: [
                      { subHeading: "Mini Bags", text: "Tiny yet chic, mini bags are making a big impact in the fashion world." },
                      { subHeading: "Bold Colors", text: "Bright and vibrant hues are dominating handbag trends this season." },
                      { subHeading: "Chain Straps", text: "Metallic chain straps add a touch of glamour to any handbag style." },
                      { subHeading: "Sustainable Fashion", text: "Eco-conscious designs made from organic and recycled materials are on the rise." }
                  ],
                  contents: ""
              },
              {
                  heading: "5. Tips for Buying the Perfect Handbag",
                  content: [
                      { subHeading: "Define Your Needs", text: "Consider the purpose of the bag—daily use, special occasions, or travel." },
                      { subHeading: "Set a Budget", text: "Handbags are available in various price ranges; pick one that fits your budget without compromising quality." },
                      { subHeading: "Focus on Functionality", text: "Look for compartments, zippers, and adjustable straps for added convenience." },
                      { subHeading: "Test Durability", text: "Ensure the material, stitching, and hardware are of high quality for long-term use." },
                      { subHeading: "Timeless vs. Trendy", text: "Invest in timeless designs for versatility and trendy bags for seasonal flair." }
                  ],
                  contents: ""
              },
              {
                  heading: "6. Seasonal Picks for Women's Handbags",
                  content: [
                      { subHeading: "Spring", text: "Floral prints and pastel colors dominate spring handbag collections." },
                      { subHeading: "Summer", text: "Lightweight materials and bright, tropical designs are perfect for sunny days." },
                      { subHeading: "Autumn", text: "Earthy tones and textured fabrics align with fall's aesthetic." },
                      { subHeading: "Winter", text: "Opt for structured bags in rich, dark hues like burgundy and navy." }
                  ],
                  contents: ""
              },
              {
                  heading: "7. Customization and Personalization",
                  content: [
                      { subHeading: "Monograms", text: "Add a personal touch with initials or names on your handbag." },
                      { subHeading: "DIY Decorations", text: "Use charms, scarves, or patches to customize your bag." },
                      { subHeading: "Collaborative Designs", text: "Explore limited-edition bags created in collaboration with designers or artists." }
                  ],
                  contents: ""
              },
              {
                  heading: "8. Care and Maintenance",
                  content: [
                      { subHeading: "Cleaning", text: "Follow material-specific cleaning instructions to keep your bag looking new." },
                      { subHeading: "Storage", text: "Store bags in dust bags or on shelves to maintain their shape and avoid damage." },
                      { subHeading: "Avoid Overloading", text: "Carrying excessive weight can strain and deform the bag." },
                      { subHeading: "Weather Protection", text: "Use waterproof sprays or covers to shield your bag from rain or spills." }
                  ],
                  contents: ""
              }
            ]
          },
          

   


          {
            id: 6,
            title: "The Ultimate Guide to Women's Hoodies: Styles, Trends, and Tips",
            content: "Women's hoodies are the perfect combination of comfort and style, providing warmth while making a fashion statement. From cozy loungewear to athleisure, this guide explores the different styles of women's hoodies, the latest trends, and how to style them.",
            "sections": [
              {
                  heading: "1. Popular Styles of Women's Hoodies",
                  content: [
                      { subHeading: "Pullover Hoodies", text: "A classic hoodie style, pullover hoodies are cozy and versatile, offering warmth without the need for zippers." },
                      { subHeading: "Zip-Up Hoodies", text: "With a front zipper, these hoodies provide easy wearability and are ideal for layering over T-shirts or under jackets." },
                      { subHeading: "Oversized Hoodies", text: "Trendy and comfortable, oversized hoodies offer a relaxed, streetwear-inspired look." },
                      { subHeading: "Cropped Hoodies", text: "A fashionable twist on the traditional hoodie, cropped styles pair perfectly with high-waisted jeans or skirts." },
                      { subHeading: "Fleece Hoodies", text: "Made from warm, soft fleece material, these hoodies are ideal for colder weather and outdoor activities." },
                      { subHeading: "Tech Hoodies", text: "Designed for athletes or active wear, tech hoodies are made from moisture-wicking, breathable materials to keep you dry and comfortable." }
                  ],
                  contents: ""
              },
              {
                  heading: "2. Choosing the Right Fabric",
                  content: [
                      { subHeading: "Cotton", text: "Soft, breathable, and comfortable, cotton hoodies are ideal for everyday wear." },
                      { subHeading: "Polyester", text: "Durable and moisture-wicking, polyester hoodies are perfect for active wear or outdoor activities." },
                      { subHeading: "Fleece", text: "Fleece provides warmth and a plush feel, making it perfect for cozying up during colder months." },
                      { subHeading: "Blended Fabrics", text: "Blended fabrics like cotton-polyester blends combine the best qualities of both materials, offering softness and durability." }
                  ],
                  contents: ""
              },
              {
                  heading: "3. Styling Tips for Women's Hoodies",
                  content: [
                      { subHeading: "Casual Comfort", text: "Pair a pullover hoodie with leggings or jeans for a comfortable and laid-back look." },
                      { subHeading: "Layering", text: "Layer your hoodie under a denim jacket or over a collared shirt for a stylish yet functional outfit." },
                      { subHeading: "Accessorizing", text: "Add a beanie, scarf, or chunky sneakers to enhance the streetwear vibe of your hoodie." },
                      { subHeading: "Tucking and Knotting", text: "Tuck your hoodie into high-waisted jeans for a polished look, or knot the front for a more casual, cropped effect." },
                      { subHeading: "Athleisure", text: "For a sporty vibe, pair your hoodie with joggers, sweatpants, or sneakers to create a chic athleisure ensemble." }
                  ],
                  contents: ""
              },
              {
                  heading: "4. Trends in Women's Hoodies",
                  content: [
                      { subHeading: "Bold Colors", text: "Bright and vibrant hoodie colors are trending, including neon shades and bold prints." },
                      { subHeading: "Minimalist Designs", text: "Simple, clean styles with small logo prints or solid colors are popular for a more understated, chic look." },
                      { subHeading: "Graphic Hoodies", text: "Graphic designs, from band logos to artistic prints, continue to be a popular choice for casual wear." },
                      { subHeading: "Sustainable Materials", text: "Eco-friendly hoodies made from organic cotton or recycled fabrics are gaining popularity among environmentally conscious consumers." }
                  ],
                  contents: ""
              },
              {
                  heading: "5. Tips for Buying the Perfect Hoodie",
                  content: [
                      { subHeading: "Know Your Fit", text: "Decide if you prefer a loose, oversized fit or a more fitted style based on your body shape and comfort." },
                      { subHeading: "Consider the Purpose", text: "If you plan to use your hoodie for exercise, opt for moisture-wicking fabrics. For lounging, soft cotton or fleece is ideal." },
                      { subHeading: "Check the Details", text: "Look for hoods with adjustable drawstrings, pockets for convenience, and ribbed cuffs for a secure fit." },
                      { subHeading: "Quality Matters", text: "Ensure the hoodie has high-quality stitching and materials to guarantee durability and longevity." }
                  ],
                  contents: ""
              },
              {
                  heading: "6. Seasonal Picks for Women's Hoodies",
                  content: [
                      { subHeading: "Spring", text: "Opt for lightweight cotton or blended fabric hoodies that offer comfort without overheating." },
                      { subHeading: "Summer", text: "Choose breathable, moisture-wicking hoodies to keep cool and comfortable during warmer days." },
                      { subHeading: "Autumn", text: "Fleece-lined or thicker hoodies in warm, earthy tones are perfect for the fall season." },
                      { subHeading: "Winter", text: "Layer up with thicker hoodies or sweatshirts made from fleece or thermal fabrics to stay warm during colder months." }
                  ],
                  contents: ""
              },
              {
                  heading: "7. Customization and Personalization",
                  content: [
                      { subHeading: "DIY Designs", text: "Create your own custom hoodie by adding unique designs, patches, or embroidery for a personal touch." },
                      { subHeading: "Personalized Prints", text: "Personalized hoodies with custom messages, quotes, or names are great for gifting or self-expression." },
                      { subHeading: "Collaborative Collections", text: "Collaborations between popular designers and brands often result in limited edition, trendy hoodies." }
                  ],
                  contents: ""
              },
              {
                  heading: "8. Care and Maintenance",
                  content: [
                      { subHeading: "Washing Tips", text: "Turn your hoodie inside out and wash in cold water to preserve the fabric and any prints or logos." },
                      { subHeading: "Drying", text: "Air dry your hoodie or tumble dry on low heat to prevent shrinkage or damage." },
                      { subHeading: "Storage", text: "Hang or fold your hoodie to maintain its shape and avoid wrinkles." },
                      { subHeading: "Avoid Overwashing", text: "Wash only when necessary to preserve the fabric and reduce wear over time." }
                  ],
                  contents: ""
              }
            ]
          }
          




    
  ];
  