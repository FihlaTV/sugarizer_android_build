/*! Sugarizer 2017-08-25 */
define(function(a){var b={};return b.orders=["north","east","south","west"],b.orders.forEach(function(a,c){b[a]=c}),b.getOpposite=function(a){switch(a){case"north":return"south";case"south":return"north";case"east":return"west";case"west":return"east"}},b});