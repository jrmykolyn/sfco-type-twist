$( document ).ready( function() {
	(function( options ) {
		// --------------------------------------------------
		// CONFIGURATON
		// --------------------------------------------------

		// Re-assign `options` arg. or fallback to empty obj.
		options = options || {};

		// Define `defaults` obj.
		var defaults = {
			'color': '',
			'background': '',
			'background-color': '',
			'padding': '0px 20px',
			'box-shadow': '',
			'text-shadow': ''
		};

		// Define `settings` based on `options` and/or `defaults`.
 		var settings = {
			'color': options['color'] || defaults['color'],
			'background': options['background'] || defaults['background'],
			'background-color': options['background-color'] || defaults['background-color'],
			'padding': options['padding'] || defaults['padding'],
			'box-shadow': options['box-shadow'] || defaults['box-shadow'],
			'text-shadow': options['text-shadow'] || defaults['text-shadow'],
		}


		// --------------------------------------------------
		// EXECUTION
		// --------------------------------------------------

		// Get all elements that include target [data-*] property.
		var stringArray = document.querySelectorAll( '[data-twist-me]' );

		// Loop over matched elems.
		stringArray.forEach( function( el, i ) {
			// Get all characters within current elem.
			var charsArr = el.innerHTML.split('');

			// Clear contents of current elem.
			el.innerHTML = '';

			// Loop over characters.
			for ( var i = 0, x = charsArr.length; i < x; i++ ) {
				// Declare local vars.
				var currChar = charsArr[i];
				var wrappedElem = document.createElement( 'span' );

				// IF `currChar` is an empty space, replace with unicode char.
				if ( currChar === ' ' ) {
					currChar = '\u00A0';
				}

				// Calculate degress of rotation.
				var multiplier = ( Math.random() > 0.5 ) ? 1 : -1,
					degreesToRotate = ( Math.round( Math.random() * 20 ) * multiplier );

				// Add current character to <span>.
				wrappedElem.appendChild( document.createTextNode( currChar ) );

				// Apply base styles to <span>.
				wrappedElem.style.block = 'block';
				wrappedElem.style.float = 'left';

				// Apply decorative styles to <span>.
				for ( var prop in defaults ) {
					wrappedElem.style[prop] = settings[prop] || defaults[prop]
				}

				wrappedElem.style['color'] = settings['color'] || getRandomHex( options.hexSeed || null );
				wrappedElem.style['background-color'] = settings['background-color'] || getRandomHex( options.hexSeed || null );
				wrappedElem.style.transform = 'rotate( ' + degreesToRotate +  'deg)';

				// Add <span> tag to matched elem.
				el.appendChild( wrappedElem );
			}
		} );


		// --------------------------------------------------
		// DECLARE FUNCTIONS
		// --------------------------------------------------
		function getRandomHex( seed ) {
			// Define local vars.
			var validHexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'],
				hexCodeLength = 6,
				hexCode = '#';

			// Validate `seed` arg. and add chars to `hexCode`.
			if ( typeof seed === 'string' && seed.length <= 6 ) {
				for ( var i = 0, x = seed.length; i < x; i++ ) {
					var currChar = seed.charAt( i );

					if ( validHexChars.indexOf( currChar.toUpperCase() ) !== -1 ) {
						hexCode += currChar;
					}
				}
			}

			// Fill out remainder of HEX code with random chars from `validHexChars`.
			for ( var i = 0, x = hexCodeLength - ( hexCode.length - 1 ); i < x; i++ ) {
				hexCode += validHexChars[Math.floor( Math.random() * validHexChars.length )];
			}

			return hexCode;
		}
	})( {
			'hexSeed': '',
			'color': 'white',
			'background-color': 'blue',
			'text-shadow': '0px 1px 1px rgba(0,0,0,0.5)',
			'box-shadow': '0px 1px 1px rgba(0,0,0,0.5)'
	} );
} );