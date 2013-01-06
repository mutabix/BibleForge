/**
 * BibleForge
 *
 * @date    05-15-12
 * @version alpha (α)
 * @link    http://BibleForge.com
 * @license GNU Affero General Public License 3.0 (AGPL-3.0)
 * @author  BibleForge <info@bibleforge.com>
 */

/**
 * Copyright (C) 2013
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see http://www.opensource.org/licenses/AGPL-3.0.
 */

/// Set JSHint options.
// jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, curly:true, immed:true, latedef:true, newcap:true, nonew:true, plusplus:true, es5:true, onevar:true, node:true

"use strict";

exports.config = {
    cache_simple_html: true, /// Whether or not to cache the contents of index_non-js.html.  Should be TRUE on production servers.
    /// The database options.
    db: {
        base: "bf",         /// The database name
        ///NOTE: If connecting via a network host, remove the "sock" property.
        host: "127.0.0.1",  /// The hostname to connect to
        user: "user",       /// The database username
        pass: "password",   /// The user's password
        port: 3306,         /// The port to connect to (must be an integer) (optional: default 3306)
        ///NOTE: If connecting via a file socket, remove the "host" and "port" properties.
        ///      If not using a Unix socket file, remove the following line.
        sock: "mysqld.sock" /// The Unix socket file
    },
    use_ssl: false, /// Whether or not to use SSL (partially implemented)
    port: 7777,     /// The port for the BibleForge server to listen to.  This is the port that HTTP server forwards requests to, not the port of the HTTP server.
    static_path: "../client/" /// The folder containing files sent to the client.  The server also includes some of them.
};
