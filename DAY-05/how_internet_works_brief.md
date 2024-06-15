# How Internet Works?

The md file illustrates the process of how a user accesses a webpage on the internet, specifically how a request to visit a webpage (e.g., www.google.com) is handled. Below is a detailed step-by-step explanation:

1. **User Initiates Request**:
    - The end user types `www.google.com` into their web browser.

2. **DNS Query Sent**:
    - The browser sends a request to a DNS resolver to find the IP address of `www.google.com`.

3. **DNS Root Server**:
    - The DNS resolver queries the DNS root name server to get information about the `.com` top-level domain (TLD) servers.

4. **TLD Name Server**:
    - The root name server responds with the IP address of the TLD name server for `.com`.

5. **Domain's Authoritative Name Server**:
    - The DNS resolver then queries the TLD name server for the IP address of the name server that is authoritative for `google.com`.

6. **Authoritative Name Server Response**:
    - The TLD name server responds with the IP address of Google's authoritative name server.

7. **Final DNS Query**:
    - The DNS resolver queries Google's authoritative name server for the IP address of `www.google.com`.

8. **IP Address Retrieved**:
    - Google's authoritative name server responds with the IP address `216.58.215.78` for `www.google.com`.

9. **Content Requested from Web Server**:
    - The browser sends an HTTP request to the web server at `216.58.215.78` to retrieve the webpage.

10. **Webpage Displayed**:
    - The web server at `216.58.215.78` responds with the content of `www.google.com`, and the webpage is displayed on the user's browser.

## Visual Representation of the Steps

The diagram visually represents each of these steps as follows:

1. User at the center initiates a request.
2. DNS resolver starts querying for IP address.
3. Query goes to DNS root name server.
4. Root name server directs to TLD name server.
5. TLD name server directs to authoritative name server.
6. Authoritative name server returns the IP address.
7. DNS resolver sends the final IP address to the browser.
8. Browser sends HTTP request to the web server.
9. Web server returns the web page content.

This detailed process ensures that when a user requests a web page, the browser can find the correct server hosting that page and retrieve the content for display.
