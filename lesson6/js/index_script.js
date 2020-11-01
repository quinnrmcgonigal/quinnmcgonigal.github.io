var m = "Last Updated: " + new Date(document.lastModified);
      var p = m.length-8;
      document.writeln("<center>");
      document.write(m.substring(p, 0));
      document.writeln("</center>");