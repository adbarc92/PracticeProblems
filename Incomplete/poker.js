class Card {
	constructor( name, suit ) {
		this.name = name;
		this.suit = suit;
		this.value = parseInt( name );
		if ( name === 'A' ) {
			this.value = 14;
		} else if ( name === 'K' ) {
			this.value = 13;
		} else if ( name === 'Q' ) {
			this.value = 12;
		} else if ( name === 'J' ) {
			this.value = 11;
		}
	}
}

class Hand {
	constructor( subset, cards ) {
		this.subset = subset;
		this.cards = cards.sort( ( a, b ) => {
			return a.value > b.value ? -1 : 1;
		} );
		this.points = 0;
		this.bonusName = '';
	}

	getHighCard() {
		return this.cards.reduce( ( prev, card ) => {
			if ( card.value > prev.value ) {
				return card;
			} else {
				return prev;
			}
		}, this.cards[ 0 ] );
	}

	setPoints( bonus, bonusName ) {
		this.points = this.getHighCard().value + bonus * 100;
		this.bonusName = bonusName;
	}

	print() {
		const str = this.cards.reduce( ( prev, curr ) => {
			prev += curr.name + curr.suit + ',';
			return prev;
		}, '' ).slice( 0, -1 );
		const str2 = this.subset.reduce( ( prev, curr ) => {
			prev += curr.name + curr.suit + ',';
			return prev;
		}, '(' ).slice( 0, -1 ) + ')';
		console.log( this.bonusName, str, str2, this.points, 'points' );
	}
}

class Board {
	constructor( cardInputArray ) {
		this.cards = cardInputArray.map( ( cardInput ) => {
			return new Card( cardInput.slice( 0, -1 ), cardInput.slice( -1 ) );
		} );
	}

	createFrom( cards ) {
		this.cards = cards.slice();
	}

	size() {
		return this.cards.length;
	}

	handSize() {
		return Math.min( 5, this.size() );
	}

	createHandFrom( these ) {
		const arr = these.slice();
		const hs = this.handSize();
		if ( these.length >= hs ) {
			return new Hand( these, arr );
		}

		for ( let i = these.length; i < hs; i++ ) {
			arr.push( this.getHighCardExcept( arr ) );
		}

		return new Hand( these, arr );
	}

	getHighCard() {
		return this.cards.reduce( ( prev, card ) => {
			if ( card.value > prev.value ) {
				return card;
			} else {
				return prev;
			}
		}, this.cards[ 0 ] );
	}

	getHighCardExcept( these ) {
		return this.cards.reduce( ( prev, card ) => {
			if( !prev ) {
				if( !these.includes( card ) ) {
					return card;
				} else {
					return null;
				}
			}

			if ( card.value > prev.value && !these.includes( card ) ) {
				return card;
			} else {
				return prev;
			}
		}, null );
	}
}

function getRepeatsName( cardName, cards ) {
	return cards.reduce( ( prev, card ) => {
		if ( card.name === cardName ) {
			prev.push( card );
		}
		return prev;
	}, [] );
}

function getRepeatsSuit( cardSuit, cards ) {
	return cards.reduce( ( prev, card ) => {
		if ( card.suit === cardSuit ) {
			prev.push( card );
		}
		return prev;
	}, [] );
}

function getHighestOfRepeatedSet( numRepeats, cards ) {
	let checked = [];
	let ret = null;
	cards.forEach( ( card ) => {
		if( !checked.includes( card.name ) ) {
			checked.push( card.name );
			const cardSet = getRepeatsName( card.name, cards );
			if ( cardSet.length === numRepeats ) {
				if( ret === null || ret[ 0 ].value < cardSet[ 0 ].value ) {
					ret = cardSet.slice( 0, numRepeats );
				}
			}
		}
	} );
	return ret;
}

const getHighestPair = getHighestOfRepeatedSet.bind( null, 2 );
const getHighestTri = getHighestOfRepeatedSet.bind( null, 3 );
const getHighestQuad = getHighestOfRepeatedSet.bind( null, 4 );

const pokerHands = {
	RoyalFlush: ( board ) => {
		const straightFlush = pokerHands.StraightFlush( board );
		if( straightFlush ) {
			if( straightFlush.cards[ 0 ].name === 'A' ) {
				straightFlush.setPoints( 10, 'RoyalFlush' );
				return straightFlush;
			}
		}
		return null;
	},

	StraightFlush: ( board ) => {
		const suits = [ 'h', 'd', 's', 'c' ];

		for( let i = 0; i < suits.length; i++ ) {
			const suit = suits[ i ];
			const b = new Board( [] );
			b.createFrom( board.cards.filter( ( card ) => {
				return card.suit === suit;
			} ) );
			const straightHand = pokerHands.Straight( b );
			if( straightHand ) {
				straightHand.setPoints( 9, 'StraightFlush' );
				return straightHand;
			}
		}
		return null;
	},

	FourOfAKind: ( board ) => {
		const quad = getHighestQuad( board.cards );
		if ( quad ) {
			const quadHand = board.createHandFrom( quad );
			quadHand.setPoints( 8, 'FourOfAKind' );
			return quadHand;
		} else {
			return null;
		}
	},

	FullHouse: ( board ) => {
		const pair = getHighestPair( board.cards );
		if( pair ) {
			const cards2 = board.cards.filter( ( card ) => {
				return card.name !== pair[ 0 ].name;
			} );
			const tri = getHighestTri( cards2 );
			if( tri ) {
				const fullHouseHand = board.createHandFrom( pair.concat( tri ) );
				fullHouseHand.setPoints( 7, 'FullHouse' );
				return fullHouseHand;
			}
		}
		return null;
	},

	Flush: ( board ) => {
		let checked = [];
		let ret = null;
		board.cards.forEach( ( card ) => {
			if( !checked.includes( card.name ) ) {
				checked.push( card.name );
				const cardSet = getRepeatsSuit( card.suit, board.cards );
				if ( cardSet.length >= 5 ) {
					if( ret === null || ret[ 0 ].value < cardSet[ 0 ].value ) {
						ret = cardSet.sort( ( a, b ) => {
							return a.value > b.value ? -1 : 1;
						} ).slice( 0, 5 );
					}
				}
			}
		} );
		if( ret ) {
			const flushHand = board.createHandFrom( ret );
			flushHand.setPoints( 6, 'Flush' );
			return flushHand;
		}
		return null;
	},

	Straight: ( board ) => {
		const cards = board.cards.slice().sort( ( a, b ) => {
			return a.value > b.value ? -1 : 1;
		} );
		if( cards.length >= 5 ) {
			let highestStreak = 1;
			let streakInd = 0;
			let streak = 1;
			let cardValue = cards[ 0 ].value;
			for( let i = 1; i < cards.length; i++ ) {
				const c = cards[ i ];
				if( cardValue - c.value === 1 ) {
					streak++;
					if( streak > highestStreak ) {
						highestStreak = streak;
					}
				} else {
					streak = 1;
					if( highestStreak < 4 ) {
						streakInd = i;
					}
				}
				cardValue = c.value;
			}

			if( highestStreak >= 5 ) {
				const straightHand = board.createHandFrom( cards.slice( streakInd, streakInd + 5 ) );
				straightHand.setPoints( 5, 'Straight' );
				return straightHand;
			}
		}
		return null;
	},

	ThreeOfAKind: ( board ) => {
		const tri = getHighestTri( board.cards );
		if ( tri ) {
			const triHand = board.createHandFrom( tri );
			triHand.setPoints( 4, 'ThreeOfAKind' );
			return triHand;
		} else {
			return null;
		}
	},

	TwoPair: ( board ) => {
		const pair = getHighestPair( board.cards );
		if( pair ) {
			const cards2 = board.cards.filter( ( card ) => {
				return card.name !== pair[ 0 ].name;
			} );
			const pair2 = getHighestPair( cards2 );
			if( pair2 ) {
				const twoPairHand = board.createHandFrom( pair.concat( pair2 ) );
				twoPairHand.setPoints( 3, 'TwoPair' );
				return twoPairHand;
			}
		}
		return null;
	},

	Pair: ( board ) => {
		const pair = getHighestPair( board.cards );
		if ( pair ) {
			const pairHand = board.createHandFrom( pair );
			pairHand.setPoints( 2, 'Pair' );
			return pairHand;
		} else {
			return null;
		}
	},

	HighCard: ( board ) => {
		const highestCard = board.getHighCard();
		const highHand = board.createHandFrom( [ highestCard ] );
		highHand.setPoints( 1, 'HighCard' );
		return highHand;
	}
};

const HAND_ORDER = [
	'RoyalFlush',
	'StraightFlush',
	'FourOfAKind',
	'FullHouse',
	'Flush',
	'Straight',
	'ThreeOfAKind',
	'TwoPair',
	'Pair',
	'HighCard'
];

function getBestHand( cards ) {
	const board = new Board( cards );
	let bestHand = null;
	for ( let i in HAND_ORDER ) {
		const handType = HAND_ORDER[ i ];
		const hand = pokerHands[ handType ]( board );
		if ( hand ) {
			bestHand = hand;
			break;
		}
	}
	if( bestHand ) {
		return bestHand;
	} else {
		console.log( 'No hand?', cards );
		return null;
	}
}

function compareHands( hands ) {
	console.log( '---' );
	let winningPoints = 0;
	let winningIndex = 0;
	hands.forEach( ( h, i ) => {
		console.log( i + 1 + '.)' );
		const bestHand = getBestHand( h);
		if( bestHand ) {
			bestHand.print();
			if( bestHand.points > winningPoints ) {
				winningPoints = bestHand.points;
				winningIndex = i;
			}
		}
	} );

	console.log();
	console.log( 'Hand ' + ( winningIndex + 1 ) + ' is the winner!', winningPoints );
	console.log( '---' );
}

const testCases = [
	'9h,4c,8d,7d,Ks,10c',
	'2c,Js,Kh,9H,8D,2h',
	'2h,2c,3h,4h,5h,6h,7h',
	'Kh,2h,5s,4h,9h,3c',
	'Ah,Ad,As,Ac,Kc,Qc',
	'6c,6d,4c,4d,8d',
	'2h,3s,2d,3h,3c',
	'2h,5h,8h,Kh,Qh,6h,As',
	'2h,7h,8c,9d,10h,Jh,As',
	'2h,3h,4h,5h,6h,7s,8d,9d',
	'10h,Jh,Qh,Kh,Ah,Ad,As,Ac,9h'
].map( ( str ) => {
	return str.split( ',' );
} );

compareHands( testCases );
