var dns = require("dns");

// address: IP 주소를 담게 된다.
// family: IPv4 인지, IPv6 인지 정보가 담겨있다.
dns.lookup("google.com", function (err, address, family) {
  console.log("IP주소:", address);
  console.log("IP버전:", family);
});

var option1 = {
  family: 4,
};

dns.lookup("naver.com", option1, function (err, address, family) {
  console.log("IPv4 주소:", address);
});

var option2 = {
  family: 6,
};

dns.lookup("google.com", option2, function (err, address, family) {
  console.log("IPv6주소:", address);
});
