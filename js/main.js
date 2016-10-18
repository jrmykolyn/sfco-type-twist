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
				// Alias current array member as `currChar`.
				var currChar = charsArr[i];

				// Create new <span> elem. 
				var wrappedElem = document.createElement( 'span' );

				// IF `currChar` is an empty space, replace with unicode char.
				if ( currChar === ' ' ) {
					currChar = '\u00A0';
				}

				// Calculate degress of rotation.
				var multiplier = ( Math.random() > 0.5 ) ? 1 : -1,
					degreesToRotate = ( Math.round( Math.random() * 20 ) * multiplier );

				// Build random HEX code.
				var validHexChars = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'],
					hexCodeLength = 6,
					hexCode = '#00AA';

				for ( var j = 0, y = hexCodeLength - ( hexCode.length - 1 ); j < y; j++ ) {
					hexCode += validHexChars[Math.floor( Math.random() * validHexChars.length )];
				}

				// Add current character to <span>.
				wrappedElem.appendChild( document.createTextNode( currChar ) );

				// Apply base styles to <span>.
				wrappedElem.style.block = 'block';
				wrappedElem.style.float = 'left';

				// Apply decorative styles to <span>.
				wrappedElem.style.color = settings['color'] || hexCode;
				wrappedElem.style['background'] = settings['background'];
				wrappedElem.style['background-color'] = settings['background-color'];
				wrappedElem.style['box-shadow'] = settings['box-shadow'];
				wrappedElem.style['text-shadow'] = settings['text-shadow'];
				wrappedElem.style.padding = settings['padding'];
				wrappedElem.style.transform = 'rotate( ' + degreesToRotate +  'deg)';

				// Add <span> tag to matched elem.
				el.appendChild( wrappedElem );
			}
		} );
	})( {
			'color': 'white',
			'background-color': 'blue',
			'text-shadow': '0px 1px 1px rgba(0,0,0,0.5)',
			'box-shadow': '0px 1px 1px rgba(0,0,0,0.5)'
	} );
} );