exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          cat_id: 4,
          assigner: 5,
          name: "Look at my baby",
          description:
            "Need someone to look at my five months baby for two hours",
          status: "open",
          time: "2"
        },
        {
          id: 2,
          cat_id: 3,
          assigner: 4,
          name: "Plaster",
          description: "Need help to fix a small damage in my bedroom",
          status: "open",
          time: "1"
        },
        {
          id: 3,
          cat_id: 2,
          assigner: 3,
          name: "Feed my cat",
          description:
            "I am going to do a short trip. I need someone to feed my cat",
          status: "open",
          time: "1"
        },
        {
          id: 4,
          cat_id: 1,
          assigner: 2,
          name: "Replace battery",
          description: "I need help to replace battery of my car",
          status: "open",
          time: "1"
        },
        {
          id: 5,
          cat_id: 16,
          assigner: 4,
          name: "Meditation teacher",
          description:
            "My community centre group and I are looking for a meditation teacher to give us a class",
          status: "open",
          time: "1"
        },
        {
          id: 6,
          cat_id: 15,
          assigner: 1,
          name: "Water leak",
          description: "I have water leak in my kitchen and I need help",
          status: "open",
          time: "1"
        },
        {
          id: 7,
          cat_id: 14,
          assigner: 3,
          name: "Lawn mower",
          description: "Need help to clean my garden",
          status: "open",
          time: "1"
        },
        {
          id: 8,
          cat_id: 13,
          assigner: 4,
          name: "Christmas BBQ",
          description:
            "I am organising a Christmas BBQ and I need someone that can help me as waiter",
          status: "open",
          time: "1"
        },
        {
          id: 9,
          cat_id: 12,
          assigner: 1,
          name: "Surf",
          description: "Looking for someone that can help me to learn surf",
          status: "open",
          time: "1"
        },
        {
          id: 10,
          cat_id: 11,
          assigner: 3,
          name: "Moving house",
          description:
            "Need someone to help to move to a new house. Pretty close, not too much stuff",
          status: "open",
          time: "1"
        },
        {
          id: 11,
          cat_id: 10,
          assigner: 4,
          name: "English classes",
          description:
            "I am looking for someone that can help to study to my IELTS test",
          status: "open",
          time: "1"
        },
        {
          id: 12,
          cat_id: 9,
          assigner: 1,
          name: "Change bandage",
          description: "I suffered an accident. Need help to change bandages",
          status: "open",
          time: "1"
        },
        {
          id: 13,
          cat_id: 8,
          assigner: 3,
          name: "IRD",
          description:
            "Looking for someone that can help me with my IRD. Lots of questions",
          status: "open",
          time: "1"
        },
        {
          id: 14,
          cat_id: 7,
          assigner: 1,
          name: "JavaScript classes",
          description: "JavaScript classes with React, Redux",
          status: "open",
          time: "1"
        },
        {
          id: 15,
          cat_id: 6,
          assigner: 1,
          name: "Cleaning house",
          description: "Broken arm. Need help to clean my house",
          status: "open",
          time: "1"
        },
        {
          id: 16,
          cat_id: 5,
          assigner: 3,
          name: "Makeup",
          description:
            "I have an wedding party and no knowledge about makeups. Looking for help",
          status: "open",
          time: "1"
        },
        {
          id: 17,
          cat_id: 4,
          assigner: 4,
          name: "Afternoon with two girls",
          description:
            "Looking for someone that can stay Saturday afternoon with 2 and 4 years girls",
          status: "open",
          time: "2"
        },
        {
          id: 18,
          cat_id: 3,
          assigner: 1,
          name: "Painting",
          description: "Need to help to painting my living room",
          status: "open",
          time: "1"
        },
        {
          id: 19,
          cat_id: 2,
          assigner: 3,
          name: "Walk with dogs",
          description: "Looking for someone to walk with my dogs",
          status: "open",
          time: "1"
        },
        {
          id: 20,
          cat_id: 1,
          assigner: 4,
          name: "Replace tires",
          description: "I need help to replace tires of my car",
          status: "open",
          time: "1"
        }
      ]);
    });
};
