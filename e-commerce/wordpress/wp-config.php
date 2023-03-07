<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'e-commerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iHUmlX-e;,Y*O$O75P3<Th)G&se6yPj.3/r[JJZbA=Q{[p:W=-KU%](2/)L3#nnF' );
define( 'SECURE_AUTH_KEY',  'r`+&OEIH3>:HA`AR!L0z.KsZQbA6cryOMWV{:DwD(3Gf4)/ Ghh8PCa4*ek9:Jd@' );
define( 'LOGGED_IN_KEY',    'f@_fSJ<GP,m-;/,&*[_n~?U-(!Sh`FDt;,QS7BP9DuNQ5wr NHD%@`j[)];ckpny' );
define( 'NONCE_KEY',        'BWL5fqu81CpHk^Of8_TnRg?bhipRkxz#?e]Y!h&Q&dFg#dhQ{G_{A _Kibml?~Cc' );
define( 'AUTH_SALT',        'lzn|J4)IbDzL#-u7oY-OH]l|@:F>>ER _JR<.r1kPgD~<dq=e8+Y>3H0r`>7 8t.' );
define( 'SECURE_AUTH_SALT', '+8|npr.?)EHEpcq`~q%6jzevqsmwkr9aoY0$vC}255`07!C#@:`?gYK#4#Ls@<,=' );
define( 'LOGGED_IN_SALT',   'M@q{xJ6_rWV>}k$2zE^z y<^@B{zomi}xn+$S&lLq&1?$5e<TMcDU ,WuExg&oH^' );
define( 'NONCE_SALT',       '6VXk)GC5JZD$d=JWdoJ+01$8W/FI+SU&*/i[W6<CbcuXq/=-yT%5!2T!M7Y9:6/U' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
