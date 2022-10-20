<template>
  <div>
    <!-- contactus  Section -->
    <section id="contactus" class="">
      <div class="row ">
        <div class="col-sm-5 contact-left">
          <div class="contactus-social">
            <div class="d-flex align-items-start contactus-info ">
              <img class="info-icon" src="~static/images/mail.svg"/>
              <div>
                <p>Chat to us</p>
                <span><a href="mailto:sales@ulandu.com">sales@ulandu.com</a></span>
              </div>
            </div>
            <div class="d-flex align-items-start contactus-info">
              <img class="info-icon" src="~static/images/map.svg"/>
              <div>
                <p>Office</p>
                <span>2118 Thornridge Cir. Syracuse, <br/>Connecticut 35624</span>
              </div>
            </div>
            <div class="d-flex align-items-start contactus-info">
              <img class="info-icon" src="~static/images/call.svg"/>
              <div>
                <p>Phone</p>
                <span><a href="tel:+34123123123">+34-123-123-123</a></span>
              </div>
            </div>
          </div>
          <img class="contactus-img" src="~static/images/contactus.svg">
        </div>

        <div class="col-sm-6 offset-sm-1">
          <div class="contact-right">
            <h4>Level up your idea</h4>
            <p>You can reach us anytime via <a href="mailto:sales@novuslogics.com">sales@novuslogics.com</a></p>
            <form>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputEmail4">Name</label>
                  <input id="inputEmail4" class="form-control" placeholder="Enter your name" type="text">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputEmail4">Email</label>
                  <input id="inputEmail4" class="form-control" placeholder="Email" type="email">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Country code</label>
                  <select id="inputState" class="form-control">
                    <option>+91</option>
                    <option>+90</option>
                  </select>
                </div>
                <div class="form-group col-md-9">
                  <label for="inputEmail4">Country Name</label>
                  <select id="inputState" class="form-control">
                    <option>India</option>
                    <option></option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">

                  <label for="inputAddress">Contact number</label>
                  <input id="inputAddress" class="form-control" placeholder="Enter your mobile number" type="number">

                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress2">How can we help</label>
                <textarea id="exampleFormControlTextarea1" class="form-control" rows="2"></textarea>
              </div>

              <div class="form-row">
                <p class="contact-service-text col-sm-12">Services</p>
                <div class="col-sm-5 col-12 col-md-12 col-lg-5">
                  <label class="check-container">Web design
                    <input checked="checked" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-5 col-12 col-md-12 col-lg-5">
                  <label class="check-container">Web design
                    <input checked="checked" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-5 col-12 col-md-12 col-lg-5">
                  <label class="check-container">Content creation
                    <input checked="checked" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-5 col-12 col-md-12 col-lg-5">
                  <label class="check-container">Content creation
                    <input checked="checked" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-5 col-12 col-md-12 col-lg-5">
                  <label class="check-container">Content creation
                    <input checked="checked" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-sm-5 col-12 col-md-12 col-lg-5">
                  <label class="check-container">Other
                    <input checked="checked" type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>

              </div>
              <button class="btn btn-primary contactus-btn col-sm-3" type="submit">Sign in</button>
            </form>
          </div>
        </div>

      </div>
    </section>
    <!--End Tab  Section -->
  </div>
</template>

<script>
export default {
  name: "contact-us"
}
</script>

<style scoped>

</style>
