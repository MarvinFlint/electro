// Old switcher

/*
        if ($("#af-ap").hasClass("active-choice")) {
            $(".ad").fadeOut();
            // Level Selection: Keystones
            if ($("#klepto").hasClass("active-choice")) {
                // Level Selection: Lane
                if ($("#toplane").hasClass("active-choice")) {
                    //Level Selection: Enemy
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.klepto.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.klepto.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.klepto.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.klepto.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.klepto.assassin").fadeIn(500);
                    }

                }
                else if ($("#midlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.klepto.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.klepto.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.klepto.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.klepto.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.klepto.assassin").fadeIn(500);
                    }
                }
                else if ($("#botlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.klepto.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.klepto.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.klepto.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.klepto.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.klepto.assassin").fadeIn(500);
                    }
                }
                else {

                }
            } 
            if ($("#electrocute").hasClass("active-choice")) {
                // Level Selection: Lane
                if ($("#toplane").hasClass("active-choice")) {
                    //Level Selection: Enemy
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#wqe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.electrocute.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.electrocute.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.electrocute.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.electrocute.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.electrocute.assassin").fadeIn(500);
                    }

                }
                else if ($("#midlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.electrocute.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.electrocute.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.electrocute.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.electrocute.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.electrocute.assassin").fadeIn(500);
                    }
                }
                else if ($("#botlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.electrocute.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.electrocute.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.electrocute.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.electrocute.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.electrocute.assassin").fadeIn(500);
                    }
                }
                else {

                }
            }   
            if ($("#phaserush").hasClass("active-choice")) {
                // Level Selection: Lane
                if ($("#toplane").hasClass("active-choice")) {
                    //Level Selection: Enemy
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.phaserush.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.phaserush.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.phaserush.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.phaserush.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.phaserush.assassin").fadeIn(500);
                    }

                }
                else if ($("#midlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.phaserush.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.phaserush.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.phaserush.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.phaserush.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.phaserush.assassin").fadeIn(500);
                    }
                }
                else if ($("#botlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.phaserush.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.phaserush.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.phaserush.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.phaserush.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.phaserush.assassin").fadeIn(500);
                    }
                }
                else {

                }
            }   
            if ($("#spellbook").hasClass("active-choice")) {
                // Level Selection: Lane
                if ($("#toplane").hasClass("active-choice")) {
                    //Level Selection: Enemy
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.spellbook.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.spellbook.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.spellbook.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.spellbook.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.spellbook.assassin").fadeIn(500);
                    }

                }
                else if ($("#midlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.spellbook.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.spellbook.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.spellbook.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.spellbook.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.spellbook.assassin").fadeIn(500);
                    }
                }
                else if ($("#botlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.spellbook.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.spellbook.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.spellbook.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#qwe").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.spellbook.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.spellbook.assassin").fadeIn(500);
                    }
                }
                else {

                }
            }               
        }
        else if ($("#af-ad").hasClass("active-choice")) {
            $(".ap").fadeOut();
            if ($("#pta").hasClass("active-choice")) {
                // Level Selection: Lane
                if ($("#toplane").hasClass("active-choice")) {
                    //Level Selection: Enemy
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.pta.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.pta.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.pta.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.pta.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.pta.assassin").fadeIn(500);
                    }

                }
                else if ($("#midlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.pta.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.pta.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.pta.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.pta.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.pta.assassin").fadeIn(500);
                    }
                }
                else if ($("#botlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.pta.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.pta.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.pta.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.pta.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.pta.assassin").fadeIn(500);
                    }
                }
                else {

                }
            } 
            if ($("#fleet").hasClass("active-choice")) {
                // Level Selection: Lane
                if ($("#toplane").hasClass("active-choice")) {
                    //Level Selection: Enemy
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.fleet.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.fleet.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.fleet.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.fleet.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".top.fleet.assassin").fadeIn(500);
                    }

                }
                else if ($("#midlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.fleet.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.fleet.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.fleet.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.fleet.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".mid.fleet.assassin").fadeIn(500);
                    }
                }
                else if ($("#botlane").hasClass("active-choice")) {
                    if ($("#tank").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.fleet.tank").fadeIn(500);
                    }
                    if ($("#mage").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.fleet.mage").fadeIn(500);
                    }
                    if ($("#fighter").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.fleet.fighter").fadeIn(500);
                    }
                    if ($("#adc").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#weq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.fleet.adc").fadeIn(500);
                    }
                    if ($("#assassin").hasClass("active-choice")) {
                        $(".abilityMax").fadeOut(500);
                        $("#ewq").fadeIn(500);
                        $(".gameplay-section").fadeOut(500);
                        $(".bot.fleet.assassin").fadeIn(500);
                    }
                }
                else {

                }
            } 
        }
        */