var roomArray = [
    {
        title:'Your room',
        text:'The detective first moves to investigate your room and see if there are any clues to your disappearance. You realise you could use your powers to guide him towards the first clue; the cake fork you used in defense, locked in a drawer in the corner of the room.',
        choices:[
            {
                text:'Push the chest of drawers',
                index:1,
                buttonText:'Push'
            },
            {
              text:'Possess the locking mechanism to unlock',
              index:2,
              buttonText:'Possess'
            },
            {
              text:'Illuminate the chest of drawers',
              index:3,
              buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Your room',
        text:'Your push moves the chest of drawers, catching the detective’s attention, but without further commotion he goes back to searching for clues.',
        choices:[
            {
                text:'You realise you didn’t successfully draw the detective\'s attention to the fork',
                index:7,
                buttonText:'Continue'
            },
        ]
    },
    {
        title:'Your room',
        text:'The lock makes a satisfying click as it unlocks.',
        choices:[
            {
                text:'Push the drawer open',
                index:4,
                buttonText:'Push'
            },
            {
                text:'Illuminate the drawer',
                index:5,
                buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Your room',
        text:'The detective notices the antique chest of drawers and reminisces about the time he spent round his grandma\'s house, realising he was distracting himself he returns to searching for clues.',
        choices:[
            {
                text:'You realise you didn’t successfully draw the detective\'s attention to the fork',
                index:7,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Your room',
        text:'The drawer slides open revealing its contents.',
        choices:[
            {
                text:'Illuminate the fork inside the drawer',
                index:6,
                buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Your room',
        text:'He notices the drawer and the unusual engraving on the front, he wonders if this chest was made by Niles Tool Works in America.',
        choices:[
            {
                text:'You realise you didn’t successfully draw the detective\'s attention to the fork',
                index:7,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Your room',
        text:'He notices the fork inside the drawer and the blood stained onto it. This must be a clue, he thinks to himself, and stashes it into an evidence bag.',
        choices:[
            {
                text:'You successfully drew the detective to the clue',
                index:7,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You realise you can use your powers to guide the detective towards the relevant rooms. The next clue is hidden in the kitchen, the knife used to stab you. The knife is soaking in the water with the other cutlery from preparing the dinner for the guests. The water has become bloody from when the knife was dropped carelessly inside. ',
        choices:[
            {
                text:'Push the knife away from the others in the sink',
                index:8,
                buttonText:'Push'
            },
            {
                text:'Possess the plug to drain the sink',
                index:9,
                buttonText:'Possess'
            },
            {
                text:'Illuminate the bloody water in the sink',
                index:10,
                buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You push the knife but it just sinks back to the bottom and gets lost amongst the rest of them.',
        choices:[
            {
                text:'You realise you failed to draw the detective’s attention to the murderer’s weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You drain the sink and with it the blood that was tinting the water red.',
        choices:[
            {
                text:'You realise you failed to draw the detective’s attention to the murderer’s weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You draw attention to the water inside the sink, the detective notices and decides to walk over and investigate the fact that there is an unusual amount of blood for a standard kitchen.',
        choices:[
            {
                text:'Push the knife away from the others in the sink',
                index:11,
                buttonText:'Push'
            },
            {
                text:'Possess the plug to drain the water from the sink',
                index:12,
                buttonText:'Possess'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You push the knife but it just sinks back to the bottom and gets lost amongst the rest of them.',
        choices:[
            {
                text:'You realise you failed to draw the detective’s attention to the murderer’s weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You push the knife but it just sinks back to the bottom and gets lost amongst the rest of them.',
        choices:[
            {
                text:'Push the knife away from all the others in the sink',
                index:13,
                buttonText:'Push'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'With the knife revealed, the detective notices the abnormally large knife and the red tinge to the blade. This may be evidence as well, he decides, placing it into an evidence bag.',
        choices:[
            {
                text:'You successfully drew the detective to the murder weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You guide the detective to the engine rooms, where your body is stashed on a high shelf in a storage cupboard.',
        choices:[
            {
                text:'Push the door to the cupboard',
                index:15,
                buttonText:'Push',
            },
            {
                text:'Possess the shelving system to tip your body off and onto the floor of the cupboard',
                index:16,
                buttonText:'Possess',
            },
            {
                text:'Illuminate the door to the cupboard',
                index:17,
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You open the door to the storage cupboard.',
        choices:[
            {
                text:'Possess the shelving system to tip your body off and onto the floor of the cupboard',
                index:18,
                buttonText:'Possess',
            },
            {
                text:'Illuminate the doorway',
                index:19,
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'Your body falls off of the shelves, landing heavily on the floor of the cupboard, blocking the doorway. The detective decides to investigate the commotion, but upon discovering he can’t open the door, he gives up and walks away to continue his investigation.',
        choices:[
            {
                text:'You realise you failed to draw the detective to your body.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You draw the detective’s attention to the cupboard, which sparks memories of the empty closet in his grandma’s house where he would make forts as a child.',
        choices:[
            {
                text:'You realise you failed to draw the detective to your body.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'Your body falls from the shelves, landing heavily on the floor of the cupboard.',
        choices:[
            {
                text:'Illuminate your corpse',
                index:20,
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You draw the detective’s attention to the ajar cupboard. He walks over to investigate.',
        choices:[
            {
                text:'Possess the shelving system so it tips off your body',
                index:21,
                buttonText:'Possess',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'He sees your corpse as he approaches the cupboard. Upon further inspection of your body, he discovers a deep stab wound in your stomach.',
        addText:' It matches the knife you lead him to find in the kitchen.',
        choices:[
            {
                text:'You successfully lead the detective to find your corpse.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'Your body falls heavily onto the floor of the cupboard, landing at the detectives feet, in shock he jumps backwards slightly. Upon further inspection of your body, he discovers a deep stab wound in your stomach.',
        addText:' It matches the knife you lead him to find in the kitchen.',
        choices:[
            {
                text:'You successfully lead the detective to find your corpse.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'You next lead the detective to the ballroom where one of your friends, who saw who went with you to your room, is dancing. She could lead the detective to your killer. However the ballroom is packed and it is impossible for the detective to see her.',
        choices:[
            {
                text:'Push her apart from her group',
                index:23,
                buttonText:'Push',
            },
            {
                text:'Possess the chandelier’s hook to make it fall',
                index:24,
                buttonText:'Possess',
            },
            {
                text:'Illuminate the mass of people dancing',
                index:25,
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'She stumbles apart from her group, slightly shocked she regains her balance and walks back towards them. There are too many people in the way for the detective to even notice the commotion.',
        choices:[
            {
                text:'You realise you failed to get the detective to talk to your friend',
                index:29,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'You release the system on the chandelier and it falls to the floor. Everyone jumps back in surprise as it crashes down, the room in disarray, giving the detective a clear sight line to your friends group.',
        choices:[
            {
                text:'Push her apart from her group',
                index:26,
                buttonText:'Push',
            },
            {
              text:'Illuminate the group she is in',
              index:27,
              buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'You draw his attention to the huge crowd of people in front of him. He thinks to himself, “Wow, this ballroom is absolutely packed, I didn’t even know there were this many people on the ship.”',
        choices:[
            {
                text:'You realise you have failed to get the detective to talk to your friend',
                index:29,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'She stumbles apart from her group, as she is about to trip over backwards the detective, without even really thinking, moves to catch her.',
        choices:[
            {
                text:'Illuminate her',
                index:28,
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'He notices the extravagant group of people all looking concerned about the now destroyed chandelier in the centre of the room. The detective sighs with relief that no one was hurt in the commotion.',
        choices:[
            {
                text:'You realise you have failed to get the detective to talk to your friend',
                index:29,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'The detective grabs her just in time to stop her falling, and as she is regaining her balance he notices that he saw you and her together earlier in the night. He decided to ask her about it, she says she remembers you leaving with a man called Christopher Oxford. The detective decides it’s time for a little chat.',
        choices:[
            {
                text:'You successfully lead the detective to your friend',
                index:29,
                buttonText:'Continue',
            }
        ]
    },

]
