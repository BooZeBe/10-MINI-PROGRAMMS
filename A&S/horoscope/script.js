const form = document.querySelector('form');
const status = document.querySelector('h2');
const select = document.querySelector('select');

form.addEventListener('submit', e => {
	e.preventDefault();

	if (DATA_HOROSCOPE[select.value] !== undefined) {
		status.innerHTML = DATA_HOROSCOPE[select.value]
	} else {
		status.innerHTML = "Select your horoscope idiot!"
	}
})


const DATA_HOROSCOPE = {
	Aries: "Don't feel like you have to rationalize everything, Aries. Accept the fact that there are some things in life that occur without a specific logical explanation. More than likely these are the most interesting events and experiences that add the most spice to your routine existence. Embrace the unknown and encourage more spontaneity and playfulness in your world.",
	Taurus: "In order to reach your destination, you may have to take an unusual route today, Taurus. Zigzag your way to the finish line. Don't automatically assume that this is a bad thing. You may find that this is the preferred path. You're likely to experience many side adventures and make some wonderful discoveries. Try to remember how you got there so you can find these spots again.",
	Gemini: "Get out of the doldrums and enjoy life, Gemini. The situation is such that if you remain stagnant for a little while, you will soon sink into a spiral of depression and downward thinking. If you stay afloat and focused on your dreams, you will remain active in your pursuit of all your life's goals. You will have the power of the Universe behind you, supporting you all the way.",
	Cancer: "This morning is your time to shine, Cancer. You should be in a good mood, with a positive outlook that helps you attack the day's tasks with vitality. Elements of the unexpected may pop up and remind you that things don't always go according to plan. This should be fine, however. You will find that your easygoing approach to life will come in handy when the scheduled route doesn't work.",
	Leo: "You may get a bit frustrated in the morning because of a lack of commitment on the part of others, Leo. You may find it hard to pin down an answer when everything seems to be up in the air. The good news is that things should run much more smoothly by this evening and well into tonight. Note a major boost in emotional self-confidence now. After dark is definitely your time to shine.",
	Virgo: "The energy you put out today will most definitely fuel the fire, Virgo, so make sure you have an extinguisher within reach. There's a spark of excitement in the air indicating that something new and different is coming around the bend. You may feel anxiety building up. Be patient and you will find that good things naturally come your way.",
	Libra: "You may feel indecisive today, Libra, especially in the morning. Other people's actions may confuse you. Don't worry. Concentrate on your projects and goals. Other people can take care of themselves. Don't feel like you need to make sure everyone is attended to before you start your day. In fact, you may be the one who needs to be cared for by others. Ask for a shoulder to lean on if you need it.",
	Scorpio: "Emotionally, you should be feeling quite good today, Scorpio. This is important since you may get thrown off balance by a strange, unexpected force. The more stable you are on the inside, the less disruption this foreign energy will cause. Keep in mind that unexpected things usually happen for a reason. There might be a key opportunity waiting for you now.",
	Sagittarius: "Free your mind and consider alternative options, Sagittarius. This is a time to throw away the old to make room for the new. There's a distinct advance in original and forward thinking today. You should make it a point to go to higher levels of thought now. The more idealistic in your approach to people and situations, the better off you will be.",
	Capricorn: "You might find your energy comes in strong, erratic bursts today, Capricorn. Don't be surprised if you're high as a kite one moment and down in the dumps the next. Even if you're driving everyone crazy with your yo-yo behavior, don't let this stop you from keeping on in this fashion. You're probably able to keep very good track of the dozens of things going on around you.",
	Aquarius: "You may feel a tendency to do things the same old way today simply because it's what feels most comfortable, Aquarius. Even though the familiar route may be tempting now, it's actually better if you seek a different way to go. Things may feel chaotic, especially in the morning and early afternoon. Still, don't automatically resist things that are new and different.",
	Pisces: "An extra log has been thrown on your fire today, Pisces, so don't be surprised if you burn especially hot. Use your internal furnace to make some breakthroughs and bring matters to a higher level. Turn up the intensity on certain issues that require more life. You will bring a great deal of positive energy to just about everything you touch, so use it wisely.",
}