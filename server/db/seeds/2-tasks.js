exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          cat_id: 5,
          assigner: 20,
          name: "Look after my baby",
          description:
            "Need someone to look after my five-month old baby on weekdays from 1pm to 5pm.",
          status: "Open",
          time: "4"
        },
        {
          id: 2,
          cat_id: 3,
          assigner: 2,
          name: "Fix roof gutter",
          description: "There's a hole in it and it's almost falling off",
          status: "Open",
          time: "3"
        },
        {
          id: 3,
          cat_id: 2,
          assigner: 24,
          name: "Feed my cats",
          description:
            "I am going to go on a short trip the whole of February. I need someone to feed my cats.",
          status: "Open",
          time: "5"
        },
        {
          id: 4,
          cat_id: 1,
          assigner: 16,
          name: "Replace car battery",
          description: "I need help to replace the battery of my car.",
          status: "Open",
          time: "1"
        },
        {
          id: 5,
          cat_id: 16,
          assigner: 14,
          name: "Wanted: Meditation teacher",
          description:
            "My community centre group and I are looking for a meditation teacher to give one class on 15 January.",
          status: "Open",
          time: "1"
        },
        {
          id: 6,
          cat_id: 15,
          assigner: 7,
          name: "Water leak",
          description: "I have a water leak in my kitchen and I need help.",
          status: "Open",
          time: "2"
        },
        {
          id: 7,
          cat_id: 14,
          assigner: 12,
          name: "I need a lawn mower",
          description: "Want to borrow a lawn mower for two hours.",
          status: "Open",
          time: "2"
        },
        {
          id: 8,
          cat_id: 13,
          assigner: 19,
          name: "Staff at Christmas BBQ",
          description:
            "I am organising a Christmas BBQ and I need someone to help serve food.",
          status: "Open",
          time: "4"
        },
        {
          id: 9,
          cat_id: 12,
          assigner: 5,
          name: "Surfing lessons needed",
          description:
            "Looking for someone that can help me learn how to surf over the weekends this summer.",
          status: "Open",
          time: "6"
        },
        {
          id: 10,
          cat_id: 11,
          assigner: 15,
          name: "Moving house",
          description:
            "Need someone to help me move to a new house. Pretty close, not too much stuff. Will throw in a six-pack and pizza too.",
          status: "Open",
          time: "3"
        },
        {
          id: 11,
          cat_id: 10,
          assigner: 4,
          name: "IELTS tutor wanted",
          description:
            "I am looking for someone to help me study for my IELTS test in January!",
          status: "Open",
          time: "1"
        },
        {
          id: 12,
          cat_id: 9,
          assigner: 13,
          name: "Need assistance after injury",
          description:
            "I broke my ankle. Need some help with things around the house for two weeks.",
          status: "Open",
          time: "4"
        },
        {
          id: 13,
          cat_id: 8,
          assigner: 9,
          name: "IRD help",
          description:
            "Looking for someone that can answer some questions I have.",
          status: "Open",
          time: "1"
        },
        {
          id: 14,
          cat_id: 7,
          assigner: 1,
          name: "Help with Javascript homework",
          description: "Specifically React and Redux.",
          status: "Open",
          time: "2"
        },
        {
          id: 15,
          cat_id: 6,
          assigner: 10,
          name: "Cleaning house",
          description:
            "Need someone to deep clean my house over the weekend since I'm moving out.",
          status: "Open",
          time: "5"
        },
        {
          id: 16,
          cat_id: 4,
          assigner: 8,
          name: "Makeup help",
          description:
            "I'm attending a wedding and need someone to do my makeup.",
          status: "Open",
          time: "1"
        },
        {
          id: 17,
          cat_id: 5,
          assigner: 11,
          name: "Afternoon with two kids",
          description:
            "Looking for someone to stay every Saturday afternoon for a month with 2 and 4-year old kids for two hours. Can renew the mahi every month.",
          status: "Open",
          time: "8"
        },
        {
          id: 18,
          cat_id: 3,
          assigner: 6,
          name: "Paint my living room",
          description:
            "Need help painting my living room. All materials and tools are provided.",
          status: "Open",
          time: "5"
        },
        {
          id: 19,
          cat_id: 2,
          assigner: 3,
          name: "Walk my dogs",
          description:
            "Looking for someone to walk my dogs at 5pm on weekdays this month. Have one dachshund and one samoyed.",
          status: "Open",
          time: "4"
        },
        {
          id: 20,
          cat_id: 1,
          assigner: 18,
          name: "Replace tires",
          description:
            "I need help to replace the tires of my car. Toyota Corolla 2013, already have the tires.",
          status: "Open",
          time: "2"
        },
        {
          id: 21,
          cat_id: 2,
          assigner: 25,
          name: "Feeding my dogs",
          description:
            "Going on a short trip next weekend. Need someone to feed my dogs every morning.",
          status: "Open",
          time: "1"
        },
        {
          id: 22,
          cat_id: 10,
          assigner: 26,
          name: "Guitar lessons needed",
          description:
            "Beginner guitar player looking for someone to help me improve. I'm free in the evenings and weekends.",
          status: "Open",
          time: "3"
        }
      ]);
    });
};
