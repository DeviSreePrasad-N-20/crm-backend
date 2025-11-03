// controllers/enquiryController.js
const { Enquiry } = require('../models');

exports.createPublicEnquiry = async (req, res) => {
  try {
    const { name, email, courseInterest } = req.body;
    const enquiry = await Enquiry.create({
      name,
      email,
      courseInterest,
      claimed: false,
      counselorId: null
    });
    res.json({ message: "Enquiry submitted!", enquiry });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUnclaimedEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.findAll({ where: { claimed: false } });
    res.json({ enquiries });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClaimedEnquiries = async (req, res) => {
  try {
    const userId = req.user.id;
    const enquiries = await Enquiry.findAll({ where: { claimed: true, counselorId: userId } });
    res.json({ enquiries });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.claimEnquiry = async (req, res) => {
  try {
    const userId = req.user.id;
    const enquiryId = req.params.id;
    const enquiry = await Enquiry.findByPk(enquiryId);
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found.' });

    if (enquiry.claimed) return res.status(409).json({ message: 'Enquiry already claimed.' });

    enquiry.claimed = true;
    enquiry.counselorId = userId;
    await enquiry.save();

    res.json({ message: 'Enquiry claimed!', enquiry });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
