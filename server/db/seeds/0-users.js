exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Don",
          email: "don@gmail.com",
          mobile: 0210213789,
          hash: "yoda",
          balance: 3,
          address: "12 Morgan Street, Newmarket, 0600",
          latitude: -36.8645,
          longitude: 174.77673,
          image: "/images/users/1Don.png"
        },
        {
          id: 2,
          name: "Bryce",
          email: "bryce@gmail.com",
          mobile: 0210213645,
          hash: "hansolo",
          balance: 3,
          address: "1 George Street, Newmarket, 0600",
          latitude: -36.8644,
          longitude: 174.77502,
          image: "/images/users/2Bryce.png"
        },
        {
          id: 3,
          name: "Emily",
          email: "emily@gmail.com",
          mobile: 0212222222,
          hash: "amidala",
          balance: 3,
          address: "98 Carlton Gore Road, Newmarket, 0600",
          latitude: -36.8649,
          longitude: 174.77572,
          image: "/images/users/3Emily.png"
        },
        {
          id: 4,
          name: "Jess",
          email: "jess@gmail.com",
          mobile: 0213333333,
          hash: "padme",
          balance: 3,
          address: "424 Khyber Pass Road, Newmarket, 0600",
          latitude: -36.86723,
          longitude: 174.77686,
          image: "/images/users/4Jess.png"
        },
        {
          id: 5,
          name: "Piha",
          email: "piha@gmail.com",
          mobile: 0214444444,
          hash: "firstorder",
          balance: 3,
          address: "40 Gillies Avenue, Epsom, Auckland 1023",
          latitude: -36.87165,
          longitude: 174.77458,
          image: "/images/users/5Piha.png"
        },
        {
          id: 6,
          name: "Andria",
          email: "andria@gmail.com",
          mobile: 0215555555,
          hash: "dagobah",
          balance: 3,
          address: "Puhi Huia Road, Mount Eden, Auckland 1024",
          latitude: -36.87601,
          longitude: 174.76431,
          image: "/images/users/6Andria.png"
        },
        {
          id: 7,
          name: "Jeya",
          email: "jeya@gmail.com",
          mobile: 0216666666,
          hash: "poedameron",
          balance: 3,
          address: "217 Green Lane West, Greenlane, Epsom, Auckland 105124",
          latitude: -36.89282,
          longitude: 174.78202,
          image: "/images/users/7Jeya.png"
        },
        {
          id: 8,
          name: "Marina",
          email: "marina@gmail.com",
          mobile: 0217777777,
          hash: "bb8",
          balance: 3,
          address: "1 Kauri Glen Road, Northcote, Auckland 0627",
          latitude: -36.80966,
          longitude: 174.73372,
          image: "/images/users/8Marina.png"
        },
        {
          id: 9,
          name: "Sam",
          email: "sam@gmail.com",
          mobile: 0218888888,
          hash: "ackbar",
          balance: 3,
          address: "5-11 Averill Avenue, Kohimarama, Auckland 1071",
          latitude: -36.85106,
          longitude: 174.84217,
          image: "/images/users/9Sam.png"
        },
        {
          id: 10,
          name: "Suzana",
          email: "suzana@gmail.com",
          mobile: 02199999999,
          hash: "leia",
          balance: 3,
          address: "340 Blockhouse Bay Road, Blockhouse Bay, Auckland 0600",
          latitude: -36.91005,
          longitude: 174.70206,
          image: "/images/users/10Suzana.png"
        },
        {
          id: 11,
          name: "Jill",
          email: "jill@gmail.com",
          mobile: 0211010101,
          hash: "rey",
          balance: 3,
          address: "24 Kerr Street, Devonport, Auckland 0624",
          latitude: -36.8281,
          longitude: 174.7982,
          image: "/images/users/11Jill.png"
        },
        {
          id: 12,
          name: "Roman",
          email: "roman@gmail.com",
          mobile: 0211212121,
          hash: "kylo",
          balance: 3,
          address: "9 The Strand, Takapuna, Auckland 0622",
          latitude: -36.78741,
          longitude: 174.77434,
          image: "/images/users/12Roman.png"
        },
        {
          id: 13,
          name: "Adam",
          email: "adam@gmail.com",
          mobile: 0211313131,
          hash: "alderaan",
          balance: 3,
          address: "202 Onewa Road, Birkenhead, Auckland 0626",
          latitude: -36.81026,
          longitude: 174.73114,
          image: "/images/users/13Adam.png"
        },
        {
          id: 14,
          name: "Ash",
          email: "ash@gmail.com",
          mobile: 0211414141,
          hash: "chewbacca",
          balance: 3,
          address: "348 Ponsonby Road, Ponsonby, Auckland 1011",
          latitude: -36.84745,
          longitude: 174.7439,
          image: "/images/users/14Ash.png"
        },
        {
          id: 15,
          name: "Elly",
          email: "elly@gmail.com",
          mobile: 0211515151,
          hash: "jabba",
          balance: 3,
          address: "477 New North Road, Kingsland, Auckland 1021",
          latitude: -36.87192,
          longitude: 174.74457,
          image: "/images/users/15Elly.png"
        },
        {
          id: 16,
          name: "Jackie",
          email: "jackie@gmail.com",
          mobile: 0211616161,
          hash: "lando",
          balance: 3,
          address: "1/55 Sainsbury Road, Mount Albert, Auckland 1025",
          latitude: -36.87755,
          longitude: 174.72987,
          image: "/images/users/16Jackie.png"
        },
        {
          id: 17,
          name: "Peter",
          email: "peter@gmail.com",
          mobile: 0211717171,
          hash: "bobafett",
          balance: 3,
          address: "4 Owairaka Avenue, Mount Albert, Owairaka 1025",
          latitude: -36.89406,
          longitude: 174.72701,
          image: "/images/users/17Peter.png"
        },
        {
          id: 18,
          name: "Sunny",
          email: "sunny@gmail.com",
          mobile: 0211818181,
          hash: "endor",
          balance: 3,
          address: "150 Lansford Crescent, Avondale, Auckland 0600",
          latitude: -36.90597,
          longitude: 174.69917,
          image: "/images/users/18Sunny.png"
        },
        {
          id: 19,
          name: "Carolyn",
          email: "carolyn@gmail.com",
          mobile: 0211919191,
          hash: "obiwan",
          balance: 3,
          address: "151 Arthur Street, Onehunga, Auckland 1061",
          latitude: -36.921181,
          longitude: 174.786591,
          image: "/images/users/19Carolyn.png"
        },
        {
          id: 20,
          name: "Dougal",
          email: "dougal@gmail.com",
          mobile: 0212020202,
          hash: "tatooine",
          balance: 3,
          address: "434 Church Street East, Penrose, Auckland 1061",
          latitude: -36.91909,
          longitude: 174.82429,
          image: "/images/users/20Dougal.png"
        },
        {
          id: 21,
          name: "Anita",
          email: "Anita@gmail.com",
          mobile: 0212121212,
          hash: "c3po",
          balance: 3,
          address: "12 Morgan Street, Newmarket, 0600",
          latitude: -36.8645,
          longitude: 174.77673,
          image: "/images/users/21Anita.png"
        },
        {
          id: 22,
          name: "Han",
          email: "han@gmail.com",
          mobile: 0210202020,
          hash: "r2d2",
          balance: 3,
          address: "1 George Street, Newmarket, 0600",
          latitude: -36.8644,
          longitude: 174.77502,
          image: "/images/users/22Han.png"
        },
        {
          id: 23,
          name: "Sarrah",
          email: "sarrah@gmail.com",
          mobile: 0212323232,
          hash: "leia",
          balance: 3,
          address: "98 Carlton Gore Road, Newmarket, 0600",
          latitude: -36.8649,
          longitude: 174.77572,
          image: "/images/users/23Sarrah.png"
        },
        {
          id: 24,
          name: "Phoenix",
          email: "phoenix@gmail.com",
          mobile: 0212424242,
          hash: "luke",
          balance: 3,
          address: "424 Khyber Pass Road, Newmarket, 0600",
          latitude: -36.86723,
          longitude: 174.77686,
          image: "/images/users/24Phoenix.png"
        },
        {
          id: 25,
          name: "Kirstie",
          email: "kirstie@gmail.com",
          mobile: 0212525252,
          hash: "vader",
          balance: 3,
          address: "130 Point England Road, Point England, Auckland 1072",
          latitude: -36.88292,
          longitude: 174.86689,
          image: "/images/users/25Kirstie.png"
        },
        {
          id: 26,
          name: "Joshua",
          email: "joshua@gmail.com",
          mobile: 0212626262,
          hash: "naboo",
          balance: 3,
          address: "172 West Tamaki Road, Glen Innes, Auckland 1072",
          latitude: -36.86987,
          longitude: 174.86399,
          image: "/images/users/26Josh.png"
        }
      ]);
    });
};
